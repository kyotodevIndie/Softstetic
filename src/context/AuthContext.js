import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      // requestApi to get userData
      setUser(response.user)
    }
  }, [])

  async function signIn({ email, password }) {
    //request Api to login

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 24, // 24 hours
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`

    setUser(user)

    Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth() {
  const value = useContext(TodoContext)
  const { user, isAuthenticated, signIn } = value
  return {
    user,
    isAuthenticated,
    signIn,
  }
}
