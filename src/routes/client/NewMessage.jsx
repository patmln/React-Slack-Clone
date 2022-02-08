import SearchUser from '../../components/stateful/SearchUser'
import ChatInput from '../../components/stateful/ChatInput'
import styled from 'styled-components'
import {useState} from 'react'

const NewMessage = ({auth}) => {
  const [selected, setSelected] = useState([])

  return (
    <Container>
      <Heading>New message</Heading>
      <SearchUser 
        auth={auth}
        selected={selected}
        setSelected={setSelected}
      />
      <ChatInput 
        auth={auth}
        selected={selected}
      />
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

const Heading = styled.h4`
  width: 100%;
  height: 49px;
  line-height: 49px;
  padding-left: 20px;
  background: #1A1D21;
  outline: 1px solid #35373B;
`
