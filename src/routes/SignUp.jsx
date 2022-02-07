import {inputData} from '../data/signUpInputData'
import {register} from '../utils/api/user'
import styled from 'styled-components'
import Form from '../components/Form'
import {useState} from 'react'

export default() => {
  const logoUrl = 'http://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg'

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
        <img src={logoUrl} alt='slack logo'/>
        <Main>
          <p>
            We suggest using the <strong>email address you use at work.</strong>
          </p>
          <Form 
            btnLabel='Sign Up'
            inputData={inputData}
            handleSubmit={handleSubmit}/>
        </Main>
      </Content>
    </SignUpPage>
  )
}

const SignUpPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #f8f8f8;
  justify-content: center;
`

const Content = styled.div`
  padding: 110px;  
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12), 
    0 1px 2px rgba(0, 0, 0, 0.24);
  img { 
    height: 40px;
    margin-bottom: 20px; 
  }
`

const Main = styled.div`
  width: 330px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 15px;
    padding-bottom: 10px;
  }
`
