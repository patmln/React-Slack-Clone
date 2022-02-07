import {sendMessage} from '../../utils/api/messages'
import {HiPaperAirplane} from 'react-icons/hi'
import styled from 'styled-components'
import {useState} from 'react'

export default({auth}) => {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = () => {
    console.log(input)
    // sendMessage(auth, messageObj)
  }

  return (
    <ChatInput>
      <Container>
        <input 
          type='text' 
          placeholder='Message here...'
          onChange={e => setInput(e.target.value)}/>
        <button onClick={handleSend}>
          <HiPaperAirplane size={18} color='white'/>
        </button>
      </Container> 
    </ChatInput>
  )
}

const ChatInput= styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: auto;
  padding-bottom: 24px;
`

const Container = styled.div`
  height: 42px;
  display: flex;
  border-radius: 4px;
  padding-left: 10px;
  align-items: center;
  border: 1px solid #8D8D8E;

  input {
    flex: 1;
    border: none;
    font-size: 13px;
    color: whitesmoke;
    background: transparent;
    &:focus { outline: none; }
    &::placeholder { color: #FFF; }
  }

  button {
    width: 32px;
    border: none;
    display: flex;
    cursor: pointer;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    background: transparent;
    transform: rotate(90deg);
  }
`
