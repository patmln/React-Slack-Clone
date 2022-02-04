import SignUpPage from './routes/signup/SignUpPage'
import {Routes, Route} from 'react-router-dom'
import ErrorPage from './routes/ErrorPage'
import MainPage from './routes/MainPage'

export default() => (
  <Routes>
    <Route index element={<MainPage/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    <Route path='/signup' element={<SignUpPage/>}/>
  </Routes>
)
