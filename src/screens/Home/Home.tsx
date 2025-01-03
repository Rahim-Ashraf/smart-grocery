import { useNavigation } from '@react-navigation/native'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

const Home = () => {
    const navigation = useNavigation()

    return (
        <ScrollView>
            <Text>Smart Grocery</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text>Login</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Home