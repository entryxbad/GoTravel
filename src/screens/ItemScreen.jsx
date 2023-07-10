import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ItemScreen = ({ route }) => {
  const data = route?.params

  return (
    <SafeAreaView>
      <Text>ItemScreen</Text>
    </SafeAreaView>
  )
}

export default ItemScreen
