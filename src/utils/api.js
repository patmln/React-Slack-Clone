const baseUrl = 'http://206.189.91.54//api/v1/' 
const jsonType = 'application/json'
const headers = { 
  'Content-Type': jsonType, 
}

export const register = async (userData) => {
  const {stringify} = JSON
  const options = {
    method: 'POST',
    headers: headers,
    body: stringify(userData),
  }

  try {
    const res = await fetch(`${baseUrl}/auth`, options)
    console.log(res) 
    const data = await res.json()
    console.log(data)
  } catch(err) {
    console.log(err)
  }
}

export const login = async (userData) => {
  console.log('login')
  const {stringify} = JSON
  const options = {
    method: 'POST',
    headers: headers,
    redirect: 'follow',
    body: stringify(userData)
  }

  try {
    const res = await fetch(`${baseUrl}/auth/sign_in`, options)
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
export const sendMessage = async (authData, message) => {
  const {stringify} = JSON
  const options = {
    method: 'POST',
    headers: authData,
    body: stringify(message),
  }

  try {
    const res = await fetch(`${baseUrl}/messages`, options)
    console.log(res)
  } catch(err) {
    console.log(err)
  }
}

export const getMessages = async (authData, receiverId) => {
  const {stringify} = JSON
  const options = {
    method: 'GET',
    headers: authData,
  }

  try {
    const res = await fetch(`${baseUrl}/messages?receiver_class=User&receiver_id=${receiverId}`, options)
    const data = await res.json()
    return data
  } catch(err) {
    console.log(err)
    return null
  }
}
export const createChannel = async () => {

}
export const getAllUsersChannels = async () => {

}
export const getChannelDetails = async () => {

}
export const addMemberToChannel = async () => {

}
export const allUsers = async () => {

}
export const allUsersOwnedChannel = async () => {

}
export const recentDMs = async () => {

}
