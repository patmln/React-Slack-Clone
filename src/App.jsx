import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import SignUp from './routes/SignUp'
import ClientPage from './routes/ClientPage'
import ErrorPage from './routes/ErrorPage'
import Login from './routes/Login'

export default() => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const [user, setUser] = useState(storedUser)

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  const mainPage = user 
    ? <ClientPage user={user}/> 
      : <Login setUser={setUser}/>

  return (
    <Routes>
      <Route path='/' element={mainPage}/>
      <Route path='/login' element={mainPage}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}
