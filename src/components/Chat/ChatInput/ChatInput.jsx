import SendIcon from '@material-ui/icons/Send'
import {sendMessage} from '../../../utils/api'
import {useState} from 'react'
import {
  Container,
  InputField
} from './style'

const ChatInput = ({authData}) => {
  const handleSend = e => {
    e.preventDefault()
    const input = e.target[0]
    const messageObj = {
      'receiver_id': 3,
      'receiver_class': 'User',
      'body': input.value
    }
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
          <button><SendIcon/></button>
        </form>
      </InputField> 
    </Container>
  )
}

export default ChatInput
