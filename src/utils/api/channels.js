import {API_URI, fetchAPI} from './fetchAPI'

export const createChannel = async(auth, data) => {
  try {
    const res = await fetchAPI('channels', {
      method: 'POST',
      headers: auth,
      body: JSON.stringify(data)
    })
  } catch(e) {
    console.error(e)
  }
}

export const getAllUsersChannels = async(auth) => {
  try {
    const res = await fetchAPI('channels', {
      headers: auth 
    })
    const data = await res.json()
    return data
  } catch(e) {
    console.error(e)
    return null
  }
}

export const getChannelDetails = async() => { }

export const addMemberToChannel = async(auth) => {
  const options = {
    method: 'POST',
    headers: auth, 
    body: {}
  }
}

export const allUsersOwnedChannel = async(auth) => {
  try {
    const res = await fetchAPI('channel/owned', { headers: auth })
    const data = await res.json()
    return data
  } catch(err) {
    console.log(err)
    return null
  }
}
