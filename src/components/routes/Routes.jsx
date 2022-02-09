import {useRoutes} from 'react-router-dom'
import styled from 'styled-components'
import {useState} from 'react'

import ErrorPage from './ErrorPage'
import SignUp from './SignUp'
import Login from './Login'

import Sidebar from '../stateful/sidebar/Sidebar'
import NewMessage from './client/NewMessage'
import Nav from '../stateless/Nav'

export default() => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const [user, setUser] = useState(storedUser)

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  const mainPage = user ? 
    <ClientPage>
      <Nav user={user}/>
      <Main>
        <Sidebar auth={user.auth}/>
        <NewMessage auth={user.auth}/>
      </Main>
    </ClientPage>
      : <Login setUser={setUser}/>

  const routes = [
    { path: '/', element: mainPage, 
      children: [

      ]
    },
    { path: 'login', element: mainPage },
    { path: 'signup', element: <SignUp/>},
    { path: '*', element: <ErrorPage/>},
  ]

  return useRoutes(routes)
}

const ClientPage = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  color: #FFF;
  display: grid;
  background: #222529;
  grid-template-columns: 240px auto;
`
