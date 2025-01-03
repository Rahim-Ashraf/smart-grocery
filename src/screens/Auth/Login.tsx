import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

interface User {
  email: string;
  exp: string;
  iat: string;
  id: string;
  name: string;
}

const Login = () => {
  const [data, setData] = useState<User>()
  const [loginErr, setLoginErr] = useState("")
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data: any) => {
    setLoginErr("")
    try {
      const response = await fetch('https://smart-grocery-backend-n7va.onrender.com/users/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const token = await response.json();
      if (token.token) {
        const data: User = jwtDecode(token.token)
        setData(data);
      }
      else {
        setLoginErr("Please type valid Email and Password")
      }
    } catch (error) {
      setLoginErr("Login failed")
      console.error('Error fetching data:', error);
    }
  }
  console.log(data);

  return (
    <ScrollView>
      <View>
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text>{errors.email?.message as string}</Text>}
        <Controller
          control={control}
          name="password"
          rules={{ required: 'Password is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text>{errors.password?.message as string}</Text>}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        {loginErr && <Text style={{ color: "red" }}>{loginErr}</Text>}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "skyblue",
    marginBottom: 10,
  },
  submit: {
    backgroundColor: "blue",
    color: "#fff",
    padding: 5,
    borderRadius: 2,
    textAlign: "center",
    marginTop: 10,
  },
})

export default Login