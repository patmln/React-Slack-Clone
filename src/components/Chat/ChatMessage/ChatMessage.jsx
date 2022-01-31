import {
  Container,
  UserAvatar,
  MessageContent,
  Name, Date
} from './style'

const ChatMessage = props => {
  const {email, date, text} = props
  return (
    <Container>
      <UserAvatar>
        <img src='./frog-boi.jpg' />
      </UserAvatar>
      <MessageContent>
        <Name>
        {email}
          <Date>{date}</Date>
        </Name>
        <span>{text}</span>
      </MessageContent>
    </Container>
  )
}

export default ChatMessage
