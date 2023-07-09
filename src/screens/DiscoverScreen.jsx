import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import {
  Attractions,
  Avatar,
  Hotels,
  NotFound,
  Reastaurants
} from '../utils/image'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MenuContainer from '../components/MenuContainer'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import ItemContainer from '../components/ItemContainer'
import { fetchPlaces } from '../utils/api'

const DiscoverScreen = () => {
  const [type, setType] = useState('restaurants')
  const [isLoading, setIsLoading] = useState(false)
  const [mainData, setMainData] = useState([])

  useEffect(() => {
    fetchPlaces().then((response) => {
      setIsLoading(true)
      setMainData(response.data)

      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    })
  }, [])

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
      <View className=' flex-row py-1 mx-4 px-4 items-center mt-3 bg-white shadow-lg rounded-xl mb-5'>
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
      {isLoading ? (
        <View className='flex-1 items-center justify-center'>
          <ActivityIndicator size={'large'} color={'#0B646B'} />
        </View>
      ) : (
        <ScrollView>
          <View className='flex-row items-center justify-between px-8'>
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
            <View className='flex-row justify-between items-center px-4 mt-8'>
              <Text className='text-[#2C7379] text-[28px] font-bold'>
                Top Tips
              </Text>
              <TouchableOpacity className='flex-row items-center justify-center space-x-2'>
                <Text className='text-[#A0C4C7] text-[20px] font-bold'>
                  Explore
                </Text>
                <FontistoIcon name='arrow-right-l' size={24} color='#A0C4C7' />
              </TouchableOpacity>
            </View>
            <View className='flex-row flex-wrap justify-between px-4 items-center mt-8'>
              {mainData?.length > 0 ? (
                <>
                  {mainData.map((item, index) => (
                    <ItemContainer
                      key={index}
                      imageSrc={
                        item?.photo?.images?.medium?.url
                          ? item?.photo?.images?.medium?.url
                          : 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg'
                      }
                      title={item?.name ? item?.name : 'Information not loaded'}
                      location={
                        item?.location_string
                          ? item?.location_string
                          : 'Information not loaded'
                      }
                      item={item}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className='w-full h-[200px] items-center space-y-8 justify-center'>
                    <Image
                      source={NotFound}
                      className='w-32 h-32 object-cover'
                    />
                    <Text className='text-2xl text-[#428288] font-semibold'>
                      Ooops... No data found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default DiscoverScreen

// AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ
// AIzaSyC_FfUMp_OAwj1C7WA_Yy_UIIrijApkD4Q
