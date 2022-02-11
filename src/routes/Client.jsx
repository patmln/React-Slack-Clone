import {Outlet, Navigate, useLocation} from 'react-router-dom'
import MessagesProvider from '../contexts/MessagesProvider'
import ChannelsProvider from '../contexts/ChannelsProvider'
import UsersProvider from '../contexts/UsersProvider'
import Sidebar from '../components/sidebar/Sidebar'
import {useAuth} from '../contexts/AuthProvider'
import styled from 'styled-components'
import Nav from '../components/Nav'

export default() => {
  const {auth} = useAuth()
  const location = useLocation()

  return (auth ?
    <ClientPage>
      <Nav/>
      <ChannelsProvider>
        <MessagesProvider>
          <Main>
            <UsersProvider>
              <Sidebar/>
              <Outlet/>
            </UsersProvider>
          </Main>
        </MessagesProvider>
      </ChannelsProvider>
    </ClientPage>
    : <Navigate to='/401'/>
  )
}

const ClientPage = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-rows: 38px auto;
`

const Main = styled.div`
  color: #FFF;
  display: grid;
  background: #222529;
  grid-template-columns: 240px auto;
`
