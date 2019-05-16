import axios from 'axios'

export const JSONPlaceHolderAPI = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})
