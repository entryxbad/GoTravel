const url =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=11.847676&tr_latitude=12.838442&bl_longitude=109.095887&tr_longitude=109.149359&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '797d18dc4bmshbce9903b38ac1e7p19bc3ejsn5d37e735f837',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
}

export const fetchPlaces = async () => {
  const response = await fetch(url, options)
  return await response.json()
}
