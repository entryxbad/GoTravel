import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Attractions, Avatar, Hotels, Reastaurants } from '../utils/image'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MenuContainer from '../components/MenuContainer'

const DiscoverScreen = () => {
  const [type, setType] = useState('restaurants')

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      {/* Header section */}
      <View className='flex-row justify-between px-4 items-center'>
        <View className=''>
          <Text className='text-[40px] font-bold text-[#0B646B]'>Discover</Text>
          <Text className='text-[36px] text-[#527273]'>the beauty today</Text>
        </View>
        <View className='w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg'>
          <Image
            source={Avatar}
            className='w-full h-full rounded-md object-cover'
          />
        </View>
      </View>

      {/* Search input */}
      <View className=' flex-row py-1 mx-4 px-4 items-center mt-3 bg-white shadow-lg rounded-xl'>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: 'geometry' }}
          placeholder='Search'
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport)
          }}
          query={{
            key: 'AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ',
            language: 'en'
          }}
        />
      </View>

      {/* Menu container */}
      <ScrollView>
        <View className='flex-row items-center justify-between px-8 mt-8'>
          <MenuContainer
            key={'hotel'}
            title='Hotels'
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={'attractions'}
            title='Attractions'
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={'restaurants'}
            title='Restaurants'
            imageSrc={Reastaurants}
            type={type}
            setType={setType}
          />
        </View>

        {/* Top Tips section */}
        <View>
          <View>
            <Text>Top Tips</Text>
            <TouchableOpacity>
              <Text>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DiscoverScreen

// AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ
// AIzaSyC_FfUMp_OAwj1C7WA_Yy_UIIrijApkD4Q
