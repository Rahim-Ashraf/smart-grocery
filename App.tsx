import { View, Text, ScrollView, StatusBar, } from 'react-native'

const App = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={'black'}
        showHideTransition={'fade'} />
      <Text>Smart Grocery</Text>
    </ScrollView>
  )
}

export default App