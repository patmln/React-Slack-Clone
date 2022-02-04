import {getMessages} from '../../../utils/api'
import {useEffect, useState} from 'react'
import {BiLockAlt} from 'react-icons/bi'
import {
  MessageContainer,
  Container, Channel,
  Header, ChannelName,
  ChannelInfo,
} from './style'

import MessageInput from '../../../components/MessageInput'
import Thread from '../../../components/Thread'

const Chat = ({user}) => {
  const {authData} = user
  const [channel, setChannel] = useState()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    (async() => {
      const {data} = await getMessages(authData, '3') 
      setMessages(data)
    })()
  }, [])

  return (
    <Container>
      <Header>
        <BiLockAlt/>
        <ChannelName>
          batch15
        </ChannelName>
      </Header>
      <Thread messages={messages}/>
      <MessageInput authData={authData}/>
    </Container>
  )
}
export default Chat
