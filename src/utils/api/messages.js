import {axiosAPI} from './axiosAPI'

export const sendMessage = async(auth, body) => {
  try {
    await axiosAPI.post('messages', body, {headers: auth})
  } catch(e) { console.error(e) }
}

export const getMessages = async(auth, receiverId) => {
  try {
    const {data} = await axiosAPI(
      `messages?receiver_class=User&receiver_id=${receiverId}`,
      { headers: auth }
    )
    return data
  } catch(e) {
    console.error(e)
    return null
  }
}

export const getRecentDMs = async(auth) => { 
  try {
    const {data: {data}} = await axiosAPI('users/recent', {headers: auth})
    return data
  } catch(e) {
    console.error(e)
    return null
  }
}
