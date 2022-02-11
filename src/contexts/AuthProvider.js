import { createContext, useContext} from 'react'
import {axiosAPI} from './axiosAPI'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default({children}) => {
  const decodedToken = atob(localStorage.user || '')
  const {auth} = decodedToken && JSON.parse(decodedToken)

  const signup = async(body) => {
    try { await axiosAPI.post('auth', body) } 
    catch(e) { console.error(e) }
  }

  const login = async(body) => {
    const res = await axiosAPI.post('auth/sign_in', body)
    const { data: {data}, headers: auth } = res

    const userToken = btoa(JSON.stringify({data, auth}))
    localStorage.user = userToken
    return res
  }

  return (
    <AuthContext.Provider value={{auth, login, signup}}>
      {children}
    </AuthContext.Provider>
  )
}
