import styled from 'styled-components'

const Thread = ({messages}) => {
  return (<div>
    {messages && 
      messages.map((msg, index) => {
        const {
          body, created_at, 
          sender:{email}
        } = msg
        return(
          <Message key={index}>
            <UserAvatar>
              <img src='./frog-boi.jpg' />
            </UserAvatar>
            <MessageContent>
              <Name>
              {email}
                <Date>{created_at}</Date>
              </Name>
              <span>{body}</span>
            </MessageContent>
          </Message>
        )
      })
    }
  </div>)
}

export default Thread

// STYLES
const Message = styled.div`
  display: flex;
  padding: 8px 20px;
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
