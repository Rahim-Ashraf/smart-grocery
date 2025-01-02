import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Auth/Login"

const Stack = createNativeStackNavigator()

const RootNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default RootNavigator