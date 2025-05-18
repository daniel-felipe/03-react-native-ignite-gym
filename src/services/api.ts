import axios, { AxiosInstance } from 'axios'

import { AppError } from '@utils/AppError'
import { storageAuthTokenGet } from '@storage/storageAuthToken'

type SignOut = () => void

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void
}

export const api = axios.create({
  baseURL: 'http://192.168.18.11:3333',
}) as APIInstanceProps

api.registerInterceptTokenManager = (signOut) => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response,
    async (requestError) => {
      if (requestError?.response?.status === 401) {
        if (
          requestError.response.data?.message !== 'token.expired' &&
          requestError.response.data?.message !== 'token.invalid'
        ) {
          signOut();
          return Promise.reject(requestError)
        }

        const { refresh_token } = await storageAuthTokenGet()

        if (!refresh_token) {
          signOut();
          return Promise.reject(requestError)
        }
      }

      if (requestError.response?.data) {
        return Promise.reject(new AppError(requestError.response.data.message))
      }

      return Promise.reject(requestError)
    }
  )

  return () => {
    api.interceptors.response.eject(interceptTokenManager)
  }
}

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data) {
      return Promise.reject(new AppError(error.response.data.message))
    }

    return Promise.reject(error)
  }
)
