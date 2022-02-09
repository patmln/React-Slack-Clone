import {axiosAPI} from './axiosAPI'
import {getAuth} from './getAuth'

export const register = async(body) => {
  try { await axiosAPI.post('auth', body) } 
  catch(e) { console.error(e) }
}

export const login = async(body) => {
  try {
    const res = await axiosAPI.post('auth/sign_in', body)
    const auth = getAuth(res)
    return {res: {data}, auth}
  } catch(e) {
    console.error(e)
    return null
  }
}

export const getAllUsers = async(auth) => {
  try {
    const {data} = await axiosAPI('users', {headers: auth})
    return data
  } catch(err) {
    console.error(err)
    return null
  }
}
