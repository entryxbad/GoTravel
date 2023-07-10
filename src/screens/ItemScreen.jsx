import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import ChevronLeftIcon from 'react-native-vector-icons/FontAwesome'
import HeartBeatIcon from 'react-native-vector-icons/FontAwesome'
import FontAwesomeMapMarker from 'react-native-vector-icons/FontAwesome'
import FontAwesomeStar from 'react-native-vector-icons/FontAwesome'
import FontAwesomeMapSigns from 'react-native-vector-icons/FontAwesome'
import FontAwesomePhone from 'react-native-vector-icons/FontAwesome'
import FontAwesomeEnvelope from 'react-native-vector-icons/FontAwesome'
import FontAwesomeMapPin from 'react-native-vector-icons/FontAwesome'
import MaterialIconsMoney from 'react-native-vector-icons/MaterialIcons'

const ItemScreen = ({ route, navigation }) => {
  const data = route?.params

  return (
    <SafeAreaView className='flex-1 bg-white relative'>
      <ScrollView className='flex-1 px-4 py-6'>
        {/* Image section */}
        <View className='relative bg-white shadow-lg'>
          <Image
            className='w-full h-72 object-cover rounded-2xl'
            source={{
              uri: data?.params?.photo?.images?.large.url
                ? data?.params?.photo?.images?.large.url
                : 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg'
            }}
          />

          <View className='absolute flex-row inset-x-0 top-5 justify-between px-6'>
            <TouchableOpacity
              onPress={() => navigation.navigate('Discover')}
              className='w-10 h-10 rounded-md items-center justify-center bg-white'
            >
              <ChevronLeftIcon name='chevron-left' size={24} color='#06B2BE' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log(data?.params.bearing)}
              className='w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]'
            >
              <HeartBeatIcon name='heartbeat' size={24} color='#fff' />
            </TouchableOpacity>
          </View>

          <View className='absolute flex-row inset-x-0 bottom-5 justify-between px-6'>
            <View className='flex-row space-x-2 items-center'>
              <Text className='text-[12px] font-bold text-gray-100'>
                {data?.params?.price_level}
              </Text>
              <Text className='text-[32px] font-bold text-gray-100'>
                {data?.params?.price}
              </Text>
            </View>

            <View className='px-2 py-1 rounded-md bg-teal-100 justify-center'>
              <Text>{data?.params?.open_now_text}</Text>
            </View>
          </View>
        </View>

        {/* Title section */}

        <View className='mt-6'>
          <Text className='text-[#428288] text-[24px] font-bold'>
            {data?.params.name}
          </Text>
          <View className='flex-row items-center space-x-2 mt-2'>
            <FontAwesomeMapMarker name='map-marker' size={25} color='#8597A2' />
            <Text className='text-[#8C9EA6] text-[20px] font-bold'>
              {data?.params.location_string}
            </Text>
          </View>
        </View>

        {/* Description row */}

        <View className='mt-4 flex-row items-center justify-between'>
          {data?.params.rating && (
            <View className='flex-row items-center space-x-2'>
              <View className='w-12 h-12 bg-red-100 rounded-2xl items-center justify-center'>
                <FontAwesomeStar name='star' size={24} color='#D58574' />
              </View>
              <View>
                <Text className='text-[#515151]'>{data?.params.rating}</Text>
                <Text className='text-[#515151]'>Ratings</Text>
              </View>
            </View>
          )}

          {data?.params.price_level && (
            <View className='flex-row items-center space-x-2'>
              <View className='w-12 h-12 bg-red-100 rounded-2xl items-center justify-center'>
                <MaterialIconsMoney
                  name='attach-money'
                  size={24}
                  color='#D58574'
                />
              </View>
              <View>
                <Text className='text-[#515151]'>
                  {data?.params.price_level}
                </Text>
                <Text className='text-[#515151]'>Price Level</Text>
              </View>
            </View>
          )}

          {data?.params.bearing && (
            <View className='flex-row items-center space-x-2'>
              <View className='w-12 h-12 bg-red-100 rounded-2xl items-center justify-center'>
                <FontAwesomeMapSigns
                  name='map-signs'
                  size={24}
                  color='#D58574'
                />
              </View>
              <View>
                <Text className='text-[#515151]'>{data?.params.bearing}</Text>
                <Text className='text-[#515151]'>Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {/* Description section */}
        {data?.params.description && (
          <Text className='mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]'>
            {data?.params.description}
          </Text>
        )}

        {data?.params.cuisine && (
          <View className='flex-row gap-2 items-center justify-start flex-wrap mt-4'>
            {data?.params.cuisine.map((item) => (
              <TouchableOpacity
                key={item.key}
                className='px-2 py-1 rounded-md bg-emerald-100'
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Contact section */}

        <View className='space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2 mb-12'>
          {data?.params.phone && (
            <View className='items-center flex-row space-x-6'>
              <FontAwesomePhone name='phone' size={24} color='#428288' />
              <Text className='text-lg'>{data?.params.phone}</Text>
            </View>
          )}
          {data?.params.email && (
            <View className='items-center flex-row space-x-6'>
              <FontAwesomePhone name='envelope' size={24} color='#428288' />
              <Text className='text-lg'>{data?.params.email}</Text>
            </View>
          )}
          {data?.params.address && (
            <View className='items-center flex-row space-x-6'>
              <FontAwesomePhone name='map-pin' size={24} color='#428288' />
              <Text className='text-lg'>{data?.params.address}</Text>
            </View>
          )}

          <TouchableOpacity>
            <View className='mt-4 bg-[#06B2BE] items-center py-4 px-4 justify-center rounded-lg mb-4'>
              <Text className='text-gray-100 text-3xl font-semibold uppercase tracking-wide'>
                Book Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen
