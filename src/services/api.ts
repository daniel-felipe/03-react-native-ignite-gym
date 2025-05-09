import { AppError } from '@utils/AppError'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.18.11:3333',
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data) {
      return Promise.reject(new AppError(error.response.data.message))
    }

    return Promise.reject(error)
  }
)
