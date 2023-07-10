import { options } from './config'

export const fetchPlaces = async (type) => {
  const response = await fetch(
    `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=25.15543993776612&tr_latitude=25.41257834546226&bl_longitude=51.39587210719369&tr_longitude=51.62812119686502&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`,
    options
  )

  return await response.json()
}
