import {axiosAPI} from './axiosAPI'
import {
  createContext, useContext,
  useState, useLayoutEffect,
} from 'react'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default({children}) => {
  const decodedToken = atob(localStorage.user || '')
  const jsonToken = decodedToken && JSON.parse(decodedToken)
  const auth = jsonToken.auth

  const signUp = async(body) => {
    try { await axiosAPI.post('auth', body) } 
    catch(e) { console.error(e) }
  }

  const login = async(body) => {
    try {
      const res = await axiosAPI.post('auth/sign_in', body)
      const { data: {data}, headers: auth } = res

      const userToken = btoa(JSON.stringify({data, auth}))
      localStorage.user = userToken

      return res
    } catch(e) {
      console.error(e)
      return null
    }
  }


  return (
    <AuthContext.Provider value={{auth, login, signUp}}>
      {children}
    </AuthContext.Provider>
  )
}
