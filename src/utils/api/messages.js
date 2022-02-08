import {API_URI, fetchAPI} from './fetchAPI'

export const sendMessage = async(auth, message) => {
  try {
    const res = await fetchAPI('messages', {
      method: 'POST',
      headers: auth,
      body: JSON.stringify(message)
    })
  } catch(e) {
    console.error(e)
  }
}

export const getMessages = async(auth, receiverId) => {
  try {
    const res = await fetchAPI(
      `messages?receiver_class=User&receiver_id=${receiverId}`,
      { headers: auth })
    const data = await res.json()
    return data
  } catch(e) {
    console.error(e)
    return null
  }
}

export const getRecentDMs = async(auth) => { 
  try {
    const res = await fetchAPI('users/recent', {headers: auth})
    const data = await res.json()
    return data
  } catch(e) {
    console.error(e)
    return null
  }
}
