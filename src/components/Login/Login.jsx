import AuthForm from '../Form/AuthForm'
import {inputData} from './inputData'
import {login} from '../../utils/api'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  Container, 
  Content,
  Logo,
  TextFooter,
  TextHeader,
  LinkText
} from './style'

const Login = ({setUser}) => {
  const handleSubmit = e => {
    e.preventDefault()
    const {email, password} = e.target 
    const userData = {
      'email': email.value,
      'password': password.value
    }

    login(userData)
    .then(data => {
      const {stringify} = JSON
      setUser(data)
      localStorage.setItem('user', stringify(data))
    })
  }

  return (
    <Container>
      <Content>
        <Logo src="http://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"/>
        <TextHeader>Sign in to Slack App</TextHeader>
        <AuthForm 
          title='Sign In'
          btnLabel='Sign In'
          inputData={inputData}
          onSubmit={handleSubmit}
        />
        <TextFooter><p>New to Slack?</p></TextFooter>
        <LinkText><Link to = "/register" >Create an account</Link> </LinkText>
      </Content>
    </Container>
  )
}

export default Login
