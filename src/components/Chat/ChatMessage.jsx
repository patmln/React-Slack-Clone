import styled from 'styled-components'

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

// STYLES
const Container = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
`

const UserAvatar = styled.div`
  width: 36px; 
  height: 36px;
  overflow: hidden;
  margin-right: 8px;
  border-radius: 2px;
  img { width: 100%; }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  margin-right: 8px;
`

const Date = styled.span`
  font-size: 13px;
  margin-left: 8px;
  font-weight: 400;
  color: rgb(97, 96, 97);
`
