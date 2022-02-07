import Snackbar from '../components/stateful/snackbar/Snackbar'
import {useState, useEffect, useRef} from 'react'
import Form from '../components/stateless/Form'
import {inputData} from '../data/authInputData'
import {login} from '../utils/api/user'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default({setUser}) => {
  const SnackbarType = {
    success: 'success',
    fail: 'fail',
  }

  const snackbarRef = useRef(null)

  const handleSubmit = async(e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    if (!email || !password) return

    const userData = {
      'email': email, 
      'password': password
    }

    const user = await login(userData)
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
    }
    else snackbarRef.current.show()
  }

  inputData.length = 2 // Exclude confirm password

  return (
    <LoginPage>
      <Content>
        {/* <SiSlack size={100} color={'whitesmoke'}/> */}
        <img src='./slack-logo.svg'/>
        <h3>Sign in to Slack</h3>
        <p>We suggest using the <strong>email address you use at work.</strong></p> 
        <Form
          btnLabel='Sign In'
          inputData={inputData}
          handleSubmit={handleSubmit}/>
        <Link to='../signup'>Create an account</Link>
        <Snackbar
          ref={snackbarRef}
          message='Successful!'
          type={SnackbarType.success}/>
      </Content>
    </LoginPage>
  )
}

const LoginPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: whitesmoke;
  align-items: center;
  background: #19191b;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  padding: 70px;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  img { 
    height: 110px; 
    margin-bottom: 40px;
  }
  h3 { 
    font-size: 40px; 
    margin-bottom: 15px;
  }
  p { 
    font-size: 16px; 
    margin-bottom: 20px;
  }
  a {
    margin-top: 25px;
    color: whitesmoke;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`
