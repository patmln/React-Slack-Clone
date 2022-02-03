import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Chat from './components/Chat/Chat'

import styled from 'styled-components'

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

export default () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div className="App">
      {/* <BrowserRouter>{
        !localStorage.user ? <Login setUser={setUser} /> :
        <Container>
          <Header user={user}/>
          <Main>
            <Sidebar/>
            <Routes>
              <Route path="/" />
              <Route 
                path="/channels" 
                element={<Chat user={user}/>}/>
            </Routes>
          </Main>
        </Container>
      }</BrowserRouter> */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>

          
      </Routes>
    </BrowserRouter>
    </div>
  )
}
