import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

interface User {
    email: string;
    exp: string;
    iat: string;
    id: string;
    name: string;
}

const Home = () => {
    const navigation = useNavigation()
    const [user, setUser] = useState<User>()
    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem("authToken")
            if (token) {
                const userData: User = jwtDecode(token)
                setUser(userData)
            }
        }
        getToken()
    }, [])


    return (
        <ScrollView>
            <Text style={style.title}>Smart Grocery</Text>
            <Text style={style.user}>{user?.name}</Text>
            <Text style={style.user}>{user?.email}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text>Login</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 30,
    },
    user: {
        fontSize: 20,
        color: 'pink',
    }
})

export default Home