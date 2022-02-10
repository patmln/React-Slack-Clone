import MessagesProvider from '../../contexts/MessagesProvider'
import ChannelsProvider from '../../contexts/ChannelsProvider'
import UsersProvider from '../../contexts/UsersProvider'
import Sidebar from '../sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Nav'

export default() => (
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
)

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
