import AuthForm from '../Form/AuthForm'
import {inputData} from './inputData'
import {login} from '../../utils/api'
import {
  Container, 
  Content,
  Logo,
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
        <Logo src='./slack-logo.svg'/>
        <AuthForm 
          title='Sign In'
          btnLabel='Sign In'
          inputData={inputData}
          onSubmit={handleSubmit}
        />
      </Content>
    </Container>
  )
}

export default Login
