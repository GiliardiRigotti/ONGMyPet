import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/authScreen/Login';

const Stack = createStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    );
}