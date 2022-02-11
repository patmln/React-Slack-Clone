import {useParams} from 'react-router-dom'
import {useAuth} from './AuthProvider'
import {axiosAPI} from './axiosAPI'
import {
  createContext, useContext,
  useState, useEffect,
} from 'react'

const MessageContext = createContext()
export const useMessages = () => useContext(MessageContext)

export default({children}) => {
  const {auth} = useAuth()
  const {id: receiversId} = useParams()
  const [recentDMs, setRecentDMs] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    (async() => {
      try {
        const {data: {data}} = await axiosAPI('users/recent', {headers: auth})
        const uniqueByEmail = data.filter(
          (dm, index, self) =>
            index === self.findIndex(t =>  t.email === dm.email)
        )
        setRecentDMs(uniqueByEmail)
      } catch(e) { console.error(e) }
    })()
  }, [JSON.stringify(recentDMs)])   

  const getMessages = async() => {
    try {
      const url = 'messages?receiver_class=User&receiver_id='
      const {data} = await axiosAPI(
        url+receiversId, {headers: auth}
      )
      return data
    } catch(e) {
      console.error(e)
      return null
    }
  }

  const sendMessage = async(body) => {
    try {
      await axiosAPI.post('messages', body, {headers: auth})
    } catch(e) { console.error(e) }
  }

  return (
    <MessageContext.Provider 
      value={{ 
        receiversId,
        recentDMs, setRecentDMs,
        getMessages, sendMessage,
        selectedId, setSelectedId,
        conversations, setConversations,
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}

