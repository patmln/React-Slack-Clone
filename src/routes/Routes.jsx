import Unauthorized from './errorPages/Unauthorized401'
import NotFound from './errorPages/NotFound404'
import {useRoutes} from 'react-router-dom'
import SignUp from './SignUp'
import Client from './Client'
import Login from './Login'

// Client routes //
import NewMessage from './clientRoutes/NewMessage'
import Activity from './clientRoutes/Activity'
import General from './clientRoutes/General'
import Channel from './clientRoutes/Channel'
import Threads from './clientRoutes/Threads'
import Direct from './clientRoutes/Direct'

export default() => useRoutes([
  { path: '/', element: <Login/> },
  { path: 'client', element: <Client/>,
    children: [
      { path: '', element: <General/> },
      { path: 'new', element: <NewMessage/> },
      { path: 'threads', element: <Threads/> },
      { path: 'activity', element: <Activity/> },
      { path: 'direct/:id', element: <Direct/> },
      { path: 'channel/:id', element: <Channel/> }
    ]
  },
  { path: 'signup', element: <SignUp/>},
  { path: '401', element: <Unauthorized/>},
  { path: '*', element: <NotFound/>},
])
