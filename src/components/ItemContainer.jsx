import { Image, Text, TouchableOpacity, View } from 'react-native'
import StyleSheet from 'react-native-media-query'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const ItemContainer = ({ imageSrc, title, location, item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Item', { params: item })}
      className='border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2'
      style={styles.item}
    >
      <Image
        source={{ uri: imageSrc }}
        className='w-full h-40 rounded-md object-cover'
      />

      {title ? (
        <>
          <Text className='text-[#428288] text-lg font-bold'>
            {title?.length > 30 ? `${title.slice(0, 14)}...` : title}
          </Text>

          <View className='flex-row items-center space-x-1'>
            <FontAwesomeIcon name='map-marker' size={20} color='#8597A2' />
            <Text className='text-[#428288] text-sm font-bold'>
              {location?.length > 18 ? `${location.slice(0, 18)}...` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  )
}

export default ItemContainer

const { styles } = StyleSheet.create({
  item: {
    '@media (max-width: 720px)': {
      width: '100%'
    }
  }
})
