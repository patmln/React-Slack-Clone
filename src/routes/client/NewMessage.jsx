import styled from 'styled-components'
import {useState} from 'react'

import SearchUser from '../../components/SearchUser'
import ChatInput from '../../components/ChatInput'

const NewMessage = ({user}) => {
  const [receiverId, setReceiverId] = useState('')
  const {auth} = user
  return (
    <Container>
      <Header>
        <h4>New message</h4>
      </Header>
      <SearchUser auth={auth}/>
      <ChatInput auth={auth}/>
    </Container>
  )
}

export default NewMessage

const Container = styled.div`
  display: flex;
  color: #d1d2d3;
  align-items: center;
  flex-direction: column;
`

const Header = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;
`
