import { jwtDecode, JwtPayload } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { View, Text, ScrollView, StatusBar, } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface User {
  email: string;
  exp: string;
  iat: string;
  id: string;
  name: string;
}

const App = () => {
  const [data, setData] = useState<User>()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.4:3000/users/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: 'new4', password: 'rahim' })
        });
        const token = await response.json();
        const data: User = jwtDecode(token.token)
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <StatusBar backgroundColor={'black'}
          showHideTransition={'fade'} />
        <Text>Smart Grocery</Text>
      </ScrollView>
    </GestureHandlerRootView>

  )
}

export default App