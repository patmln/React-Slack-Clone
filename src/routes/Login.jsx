import {login, register} from '../utils/api'
import {useState, useEffect} from 'react'
import styled from 'styled-components'

// LOGIN COMPONENT
export default({setUser}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (!email || !password) return

    const user = {
      'email': email, 
      'password': password
    }

    const data = await login(user)
    setUser(data)
  }

  return (
    <Container>
      <Content>
        <Logo src='./slack-logo.svg'/>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type='password' 
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
          <button type='submit'>Sign In</button>
        </form>
      </Content>
    </Container>
  )
}

// LOGIN STYLED
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #f8f8f8;
  justify-content: center;
`

const Content = styled.div`
  padding: 100px;  
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12), 
    0 1px 2px rgba(0, 0, 0, 0.24);
`

const Logo = styled.img`
  height: 100px;
`
