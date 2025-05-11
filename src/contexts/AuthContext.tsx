import { ReactNode, createContext, useEffect, useState } from 'react'

import { UserDTO } from '@dtos/UserDTO'
import { api } from '@services/api'
import { storageUserGet, storageUserSave } from '@storage/storageUser'

export type AuthContextDataProps = {
  user: UserDTO
  signIn: (email: string, password: string) => Promise<void>
  isLoadingUserStorageData: boolean
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true)

  async function signIn(email: string, password: string) {
    const { data } = await api.post('/sessions', { email, password })

    if (data.user) {
      setUser(data.user)
      storageUserSave(data.user)
    }
  }

  async function loadUserData() {
    try {
      const loggedUser = await storageUserGet()

      if (loggedUser) {
        setUser(loggedUser)
        setIsLoadingUserStorageData(false)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, isLoadingUserStorageData }}>
      {children}
    </AuthContext.Provider>
  )
}
