import {login} from '../utils/api/user'
import styled from 'styled-components'
import {useState, useEffect, useRef} from 'react'
import Snackbar from '../components/Snackbar/Snackbar'

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
    localStorage.setItem('user', JSON.stringify(data))
    setUser(data)
  }

  //Snackbar
  const SnackbarType = {
    success: "success",
    fail: "fail",
  };

  const snackbarRef = useRef(null);

  return (
    <LoginPage>
      <Content>
        <img src='./slack-logo.svg' style={{height: '100px'}}/>
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
          <button 
          type='submit'
          onClick={() => {
            snackbarRef.current.show();
          }}
          >Sign In</button>
        </form>
        <Snackbar
        ref={snackbarRef}
        message="Task Completed Successfully!"
        type={SnackbarType.success}
      />
      </Content>
    </LoginPage>
  )
}

const LoginPage = styled.div`
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
