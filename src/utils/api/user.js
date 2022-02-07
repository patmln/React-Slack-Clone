import {API_URI, fetchAPI} from './fetchAPI'
import {getAuth} from './getAuth'

export const register = async(userData) => {
  try {
    const res = await fetchAPI('auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
  } catch(e) {
    console.error(e)
  }
}

export const login = async(userData) => {
  try {
    const res = await fetchAPI('auth/sign_in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    const auth = getAuth(res)
    const {data}= await res.json()

    return {data, auth}
  } catch(e) {
    console.error(e)
    return null
  }
}

export const getAllUsers = async(auth) => {
  try {
    const res = await fetchAPI('users', { headers: auth })
    const data = await res.json()
    return data
  } catch(err) {
    console.error(err)
    return null
  }
}
