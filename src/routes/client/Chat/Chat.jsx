import {getMessages} from '../../../utils/api/messages'
import {useEffect, useState} from 'react'
import {BiLockAlt} from 'react-icons/bi'
import {
  MessageContainer,
  Container, Channel,
  Header, ChannelName,
  ChannelInfo,
} from './style'

import ChatInput from '../../../components/ChatInput'
import Thread from '../../../components/Thread'

const Chat = ({user}) => {
  const [channel, setChannel] = useState()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    (async() => {
      const {data} = await getMessages(user.auth, '3') 
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
      <ChatInput auth={user.auth}/>
    </Container>
  )
}
export default Chat
