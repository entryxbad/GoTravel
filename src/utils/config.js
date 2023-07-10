const API_KEY = '797d18dc4bmshbce9903b38ac1e7p19bc3ejsn5d37e735f837'
const API_URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=25.15543993776612&tr_latitude=25.41257834546226&bl_longitude=51.39587210719369&tr_longitude=51.62812119686502&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
}

export { options, API_URL }
