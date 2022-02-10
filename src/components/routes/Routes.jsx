import {useAuth} from '../../contexts/AuthProvider'
import {useRoutes} from 'react-router-dom'
import NotFound from './NotFound'
import SignUp from './SignUp'
import Client from './Client'
import Login from './Login'

import NewMessage from './clientRoutes/NewMessage'
import General from './clientRoutes/General'
import Channel from './clientRoutes/Channel'
import Direct from './clientRoutes/Direct'
import Chat from './clientRoutes/Chat'

export default() => {
  const {user} = useAuth()
  const mainPage = user ? <Client/> : <Login/>

  return useRoutes([
    { path: '/', element: mainPage, },
    { path: 'client', element: mainPage,
      children: [
        { path: '', element: <General/> },
        { path: 'chat', element: <Chat/> },
        { path: 'direct', element: <Direct/> },
        { path: 'new', element: <NewMessage/> },
        { path: 'channel', element: <Channel/> }
      ]
    },
    { path: 'signup', element: <SignUp/>},
    { path: '*', element: <NotFound/>},
  ])
}

