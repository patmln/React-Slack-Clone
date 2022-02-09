import {inputData} from '../../data/authInputData'
import {register} from '../../utils/api/user'
import styled from 'styled-components'
import Form from '../stateless/Form'
import {useState} from 'react'

export default() => {
  const handleSubmit = e => {
    // if(!email || !password || !confirmPassword) return
    
    // const newUser = {
    //   'email': email,
    //   'password': password,
    //   'password_confirmation': confirmPassword
    // }
    
    // register(newUser) 
  }

  return(
    <SignUpPage>
      <Content>
        <img src='./slack-logo.svg'/>
        <h3>Join Slack</h3>
        <p>
          We suggest using the <strong>email address you use at work.</strong>
        </p>
        <Form 
          btnLabel='Sign Up'
          inputData={inputData}
          handleSubmit={handleSubmit}
        />
      </Content>
    </SignUpPage>
  )
}

const SignUpPage = styled.div`
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
    padding-bottom: 20px;
  }
`
