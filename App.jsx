import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import DiscoverScreen from './src/screens/DiscoverScreen'
import ItemScreen from './src/screens/ItemScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Discover' component={DiscoverScreen} />
        <Stack.Screen name='Item' component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
