import {channelThreadData} from '../data/channelThreadData'
import styled from 'styled-components'

export default() => (
  <Message>
    {channelThreadData.map(item => (<>
      <UserAvatar>
        {item.icon}
      </UserAvatar>
      <MessageContent>
        <Name>
        {item.name}
          <Date>{item.date}</Date>
        </Name>
        <span>{item.message}</span>
      </MessageContent>
    </>))}
  </Message>
)

const Message = styled.div`
  display: grid;
  padding: 8px 20px;
  grid-template-columns: 3.5% auto;
  row-gap: 10px;
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
