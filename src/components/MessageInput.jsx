import {HiPaperAirplane} from 'react-icons/hi'
import {sendMessage} from '../utils/api'
import styled from 'styled-components'
import {useState} from 'react'

const ChatInput = ({authData}) => {
  const [message, setMessage] = useState('')

  const handleSend = e => {
    if (!input.value) return
    sendMessage(authData, messageObj)
  }

  return (
    <Container>
      <InputField>
        <form onSubmit={handleSend}>
          <input 
            type='text' 
            placeholder='Message here...'/>
          <button>
            <HiPaperAirplane size={18} color='white'/>
          </button>
        </form>
      </InputField> 
    </Container>
  )
}

export default ChatInput

const Container = styled.div`
  padding: 0 20px;
  padding-bottom: 24px;
`

const InputField = styled.div`
  border-radius: 4px;
  border: 1px solid #8D8D8E;
  form {
    height: 42px;
    display: flex;
    padding-left: 10px;
    align-items: center;

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
  }
`
