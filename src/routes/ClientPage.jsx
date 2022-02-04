// MODULES
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import {useState} from 'react'

// COMPONENTS
import Sidebar from '../components/Sidebar/Sidebar'
import Nav from '../components/Nav'

// ROUTES
import DirectMessage from './main/DirectMessage'
import NewMessage from './main/NewMessage'
import Welcome from './main/Welcome'
import Channel from './main/Channel'
import Chat from './main/Chat/Chat'
import Login from './LoginPage'

const ClientPage = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const [user, setUser] = useState(storedUser)

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    !user ? <Login setUser={setUser}/> :
    <Container>
      <Nav user={user}/>
      <Main>
        <Sidebar user={user}/>
        <Routes>
          {/* <Route index element={<NewMessage/>}/> */}
          <Route index element={<Chat user={user}/>} />
        </Routes>
      </Main>
    </Container>
  )
}

export default ClientPage

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  color: #FFF;
  display: grid;
  background: #222529;
  grid-template-columns: 240px auto;
`
