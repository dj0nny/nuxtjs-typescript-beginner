import axios from 'axios'

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

export async function fetchPhotos() {
  const res = await JSONPlaceHolderAPI.get('/photos')
  return res.data.slice(0, 21)
}

export async function fetchTodos() {
  const res = await JSONPlaceHolderAPI.get('/todos')
  return res.data
}

export async function fetchAlbums() {
  const res = await JSONPlaceHolderAPI.get('/albums')
  return res.data
}

export async function fetchUserById(id?: string) {
  const res = await JSONPlaceHolderAPI.get("/users?id=" + `${id}`);
  return res.data[0];
}

export async function fetchUserPosts(id?: string) {
  const res = await JSONPlaceHolderAPI.get("/posts?userId=" + `${id}`)
  return res.data
}

export async function fetchUserTodos(id?: string) {
  const res = await JSONPlaceHolderAPI.get("/todos?userId=" + `${id}`)
  return res.data
}

export async function fetchUserAlbums(id?: string) {
  const res = await JSONPlaceHolderAPI.get("/albums?userId=" + `${id}`)
  return res.data
}

export async function fetchAlbumPhotos(id?: string) {
  const res = await JSONPlaceHolderAPI.get("/photos?albumId=" + `${id}`)
  return res.data
}

export async function fetchPostComments(id?: string) {
  const res = await JSONPlaceHolderAPI.get("/comments?postId=" + `${id}`)
  return res.data
}