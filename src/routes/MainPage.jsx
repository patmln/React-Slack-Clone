// MODULES
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import {useState} from 'react'

// COMPONENTS
import Sidebar from '../components/Sidebar/Sidebar'
import Chat from '../components/Chat/Chat'
import Header from '../components/Header'

// ROUTES
import Login from './LoginPage'

const MainPage = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const [user, setUser] = useState(storedUser)

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    !user ? <Login setUser={setUser}/> :
    <Container>
      <Header user={user}/>
      <Main>
        <Sidebar/>
        <Routes>
          {/* <Route index element={<Welcome />} */}
          <Route index element={<Chat user={user}/>} />
        </Routes>
      </Main>
    </Container>
  )
}

export default MainPage

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
