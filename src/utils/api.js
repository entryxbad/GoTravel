import { options, API_URL } from './config'

export const fetchPlaces = async () => {
  const response = await fetch(API_URL, options)
  console.log(options)
  return await response.json()
}
