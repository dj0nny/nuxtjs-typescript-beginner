import axios from 'axios'
import { Post, Comment } from './models';

export const JSONPlaceHolderAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export async function fetchPosts() {
  const res = await JSONPlaceHolderAPI.get('/posts')
  return res.data
}

export async function fetchComments() {
  const res = await JSONPlaceHolderAPI.get('/comments')
  return res.data
}

export async function fetchUsers() {
  const res = await JSONPlaceHolderAPI.get('/users')
  return res.data
}