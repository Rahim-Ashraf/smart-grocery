import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <GestureHandlerRootView>
      <StatusBar backgroundColor={'black'}
        showHideTransition={'fade'} />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>

  )
}

export default App