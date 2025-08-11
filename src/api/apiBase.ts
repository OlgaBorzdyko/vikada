import axios from 'axios'

export const apiBase = axios.create({
  baseURL: '/objects',
  headers: {
    'Content-Type': 'application/json',
    'X-App-Token': import.meta.env.VITE_API_TOKEN
  }
})
