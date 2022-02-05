import {Routes, Route} from 'react-router-dom'

import SignUpPage from './routes/signup/SignUpPage'
import ClientPage from './routes/ClientPage'
import ErrorPage from './routes/ErrorPage'

export default() => (
  <Routes>
    <Route path='/' element={<ClientPage/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    <Route path='/signup' element={<SignUpPage/>}/>
  </Routes>
)
