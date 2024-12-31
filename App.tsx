import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { View, Text, ScrollView, StatusBar, } from 'react-native'

const App = () => {
  const [data, setData] = useState()
  const [loginData, setLoginData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <ScrollView>
      <StatusBar backgroundColor={'black'}
        showHideTransition={'fade'} />
      <Text>Smart Grocery</Text>
    </ScrollView>
  )
}

export default App