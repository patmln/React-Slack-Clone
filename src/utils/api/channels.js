import {axiosAPI} from './axiosAPI'

export const createChannel = async(auth, body) => {
  try {
    await axiosAPI.post('channels', body, {headers: auth})
  } catch(e) { console.error(e) }
}

export const getAllUsersChannels = async(auth) => {
  try {
    const {data} = await axiosAPI('channels', {headers: auth})
    return data
  } catch(e) {
    console.error(e)
    return null
  }
}

export const getChannelDetails = async(auth, id) => {
  try {
    const {data} = await axiosAPI('channels/'+id, {headers: auth})
    return data
  } catch(e) { 
    console.error(e)  
    return null
  }
}

export const addMemberToChannel = async(auth, body) => {
  try {
    await axiosAPI.post('channel/add_member', body, {headers: auth})
  } catch(e) { console.error(e) }
}

export const allUsersOwnedChannel = async(auth) => {
  try {
    const {data} = await axiosAPI('channel/owned', {headers: auth})
    return data
  } catch(err) {
    console.log(err)
    return null
  }
}
