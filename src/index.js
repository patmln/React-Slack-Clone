import Routes from './components/routes/Routes'
import {BrowserRouter} from 'react-router-dom'
import {StrictMode} from 'react'
import {render} from 'react-dom'
import './index.css'

const root = document.getElementById('root')

render(
  <StrictMode>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </StrictMode>, 
  root
)
