import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatMessage from './ChatMessage/ChatMessage'
import ChatInput from './ChatInput/ChatInput'
import {getMessages} from '../../utils/api'
import {useEffect, useState} from 'react'
import {
  MessageContainer,
  Container, Channel,
  Header, ChannelName,
  ChannelInfo, ChannelDetails,
} from './style'

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
        <Channel>
          <ChannelName># Batch 15</ChannelName>
          <ChannelInfo>Avion School</ChannelInfo>
        </Channel>
        <ChannelDetails>
          <p>Details</p> 
          <InfoOutlinedIcon/>
        </ChannelDetails>
      </Header>
      <MessageContainer> 
        {messages && 
          messages.map((data, index) => {
          const {
            body, created_at, 
            sender: {email}
          } = data
          return (
            <ChatMessage 
              key={index} 
              text={body}
              email={email}
              date={created_at}
            />)
        })}
      </MessageContainer>
      <ChatInput authData={authData}/>
    </Container>
  )
}
export default Chat
