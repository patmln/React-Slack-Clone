// Modules
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import {useState} from 'react'

// Components
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Chat from './components/Chat/Chat'

// Routes
import Register from './components/Register/Register'
import Login from './routes/Login'

export default() => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const [user, setUser] = useState(storedUser)

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div className='App'>
      <BrowserRouter>{
        !user ? <Login setUser={setUser} /> :
        <Container>
          <Header user={user}/>
          <Main>
            <Sidebar/>
            <Routes>
              <Route path="/" />
              <Route 
                path='/channels'
                element={<Chat user={user}/>}
              />
              <Route 
                path='/register'
                element={<Register/>}
              />
            </Routes>
          </Main>
        </Container>
      }</BrowserRouter>
    </div>
  )
}

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
