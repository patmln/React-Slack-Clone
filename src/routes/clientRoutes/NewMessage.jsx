import {useMessages} from '../../contexts/MessagesProvider'
import SearchUser from '../../components/SearchUser'
import ChatInput from '../../components/ChatInput'
import styled from 'styled-components'
import {useState} from 'react'

export default() => {
  const [input, setInput] = useState('')
  const {
    sendMessage,
    selectedId, setSelectedId
  } = useMessages()
  const route = selectedId ? '../direct/'+selectedId : ''

  const handleClick = e => {
    if (selectedId) {
      sendMessage({
        'receiver_id': selectedId,
        'receiver_class': 'User',
        'body': input
      })
      setInput('')
      setSelectedId(null)
    }
    else alert('Select a receiver')
  }

  return (
    <Container>
      <Heading>New message</Heading>
      <SearchUser/>
      <ChatInput
        route={route}
        input={input}
        setInput={setInput}
        handleClick={handleClick}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  color: #D1D2D3;
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

