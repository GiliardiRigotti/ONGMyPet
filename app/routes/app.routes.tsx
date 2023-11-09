import { createStackNavigator } from '@react-navigation/stack';
import { PetViewer } from '../screens/appScreen/PetViewer';
import { PetsList } from '../screens/appScreen/PetsList';

const Stack = createStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName='PetsList' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PetsList" component={PetsList} />
            <Stack.Screen name="PetViewer" component={PetViewer} />
        </Stack.Navigator>
    );
}