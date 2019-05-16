import axios from 'axios'
import { Post } from './models';

export const JSONPlaceHolderAPI = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})

export async function fetchPosts() {
  const res = await JSONPlaceHolderAPI.get('/posts')
  return res.data
}