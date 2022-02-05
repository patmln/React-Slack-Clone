const API_URI = process.env.REACT_APP_API_URI
const headers = { 'Content-Type': 'application/json' }

export const register = async(userData) => {
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(userData),
  }

  try {
    const res = await fetch(`${API_URI}auth`, options)
    const data = await res.json()
  } catch(err) {
    console.log(err)
  }
}

export const login = async (userData) => {
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(userData)
  }

  try {
    const res = await fetch(
      `${API_URI}auth/sign_in`, options)
    const authData = {}

    for (const [key, value] of res.headers.entries()) {
      switch (key) {
        case 'access-token':
          authData['access-token'] = value
          break
        case 'client':
          authData['client'] = value
          break
        case 'expiry':
          authData['expiry'] = value
          break
        case 'uid':
          authData['uid'] = value
          break
      }
    }
    const {data}= await res.json()
    return {data, authData}
  } catch(err) {
    console.log(err)
    return null
  }
}

export const sendMessage = async (auth, message) => {
  const options = {
    method: 'POST',
    headers: auth,
    body: JSON.stringify(message),
  }

  try {
    const res = await fetch(
      `${API_URI}messages`, options)
    console.log(res)
  } catch(err) {
    console.log(err)
  }
}

export const getMessages = async (auth, receiverId) => {
  const options = {
    method: 'GET',
    headers: auth,
  }

  try {
    const res = await fetch(`${API_URI}messages?receiver_class=User&receiver_id=${receiverId}`, options)
    const data = await res.json()
    return data
  } catch(err) {
    console.log(err)
    return null
  }
}

export const createChannel = async(auth, data) => {
  const options = {
    method: 'POST',
    headers: auth,
    body: JSON.stringify(data)
  }

  try {
    const res = await fetch(`${API_URI}channels`, options)
  } catch(err) {
    console.error(err)
  }
}

export const getAllUsersChannels = async(auth) => {
  const options = { 
    method: 'GET',
    headers: auth
  } 

  try {
    const res = await fetch(`${API_URI}channels`, options)
    const data = await res.json()
    return data
  } catch(err) {
    console.error(err)
    return null
  }
}

export const getChannelDetails = async() => {

}
export const addMemberToChannel = async() => {

}

export const getAllUsers = async(auth) => {
  try {
    const res = await fetch(
      `${API_URI}users`, { headers: auth })
    const data = await res.json()
    return data
  } catch(err) {
    console.log(err)
    return null
  }
}

export const allUsersOwnedChannel = async () => {

}
export const recentDMs = async () => {

}
