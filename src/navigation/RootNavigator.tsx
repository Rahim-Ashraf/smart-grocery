import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Auth/Login"
import Home from "../screens/Home/Home"

const Stack = createNativeStackNavigator()

const RootNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default RootNavigator