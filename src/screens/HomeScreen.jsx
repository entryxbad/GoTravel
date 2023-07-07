import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { HeroImage } from '../utils/image'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      {/* First section */}

      <View className='flex-row px-6 mt-8 items-center space-x-2'>
        <View className='w-16 h-16 bg-black rounded-full items-center justify-center'>
          <Text className='text-[#00BCC9] text-3xl font-semibold'>Go</Text>
        </View>
        <Text className='text-[#2A2B4B] text-3xl font-semibold'>Travel</Text>
      </View>

      {/* Second section */}
      <View className='px-6 mt-8 space-y-3'>
        <Text className='text-[#3C6072] text-[42px]'>Enjoy the trip with</Text>
        <Text className='text-[#00BCC9] text-[38px] font-bold '>
          Good moments
        </Text>
        <Text className='text-[#3C6072] text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          dolore!
        </Text>
      </View>

      {/* Circle section */}
      <View className='w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-5 -right-36'></View>
      <View className='w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-36 -left-28'></View>

      {/* Image container */}
      <View className='flex-1 relative items-center justify-center'>
        <Animatable.Image
          animation={'fadeIn'}
          easing={'ease-in-out'}
          source={HeroImage}
          className='w-full h-full object-cover'
          resizeMode='contain'
        />

        {/* Button GO */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Discover')}
          className='absolute bottom-10 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-[100px] items-center justify-center'
        >
          <Animatable.View
            animation={'pulse'}
            easing={'ease-in-out'}
            iterationCount={'infinite'}
            className='w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]'
          >
            <Text className='text-gray-50 text-[36px] font-semibold'>Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
