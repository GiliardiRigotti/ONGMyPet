import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import listAuth from "../services/listAuth.json"

interface IAppContext {
    isLoading: boolean
    email: string | null
    signIn: (email: string) => void
    signOut: () => void
}
interface IAppProvider {
    children: React.ReactNode; //👈 children prop typr
};

const AppContext = createContext({} as IAppContext)

export const AppProvider = ({ children }: IAppProvider) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string | null>(null)

    const clearStore = async () => {
        await AsyncStorage.clear()
    }

    const storeAuthData = async (value: Object) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@OngMyPet:AuthData', jsonValue);
        } catch (e) {
            console.error(e)
        }
    };

    const getAuthData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@OngMyPet:AuthData');
            return jsonValue ? jsonValue : null
        } catch (e) {
            console.error(e)
        }
    };

    const signIn = (emailSignIn: string) => {
        setIsLoading(true)
        const findIndex = listAuth.findIndex(emailAuth => emailAuth == emailSignIn)
        if (findIndex < 0) {
            Alert.alert("Erro", "Email não autorizado, verifique suas credenciais")
            return
        }
        storeAuthData(listAuth[findIndex])
        setEmail(listAuth[findIndex])
        setIsLoading(false)
    }

    const signOut = () => {
        clearStore()
        setEmail(null)
    }



    useEffect(() => {
        (async () => {
            const auth = await getAuthData()
            if (auth) {
                setEmail(auth)
            }
        })()
    }, [])

    return (
        <AppContext.Provider value={{ isLoading, email, signIn, signOut }}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)
    return context
}