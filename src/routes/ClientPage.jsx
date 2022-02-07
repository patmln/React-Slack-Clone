import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'

import Sidebar from '../components/stateful/sidebar/Sidebar'
import Nav from '../components/stateless/Nav'

import GeneralChannel from './client/GeneralChannel'
import DirectMessage from './client/DirectMessage'
import NewMessage from './client/NewMessage'
import Channel from './client/Channel'
import Chat from './client/Chat'

export default({user}) => (
  <ClientPage>
    <Nav user={user}/>
    <Main>
      <Sidebar user={user}/>
      <Routes>
        <Route index element={<Channel user={user}/>} />
        {/* <Route index element={<NewMessage user={user}/>}/> */}
        {/* <Route index element={<Chat user={user}/>} /> */}
      </Routes>
    </Main>
  </ClientPage>
)

const ClientPage = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
  overflow: hidden;
`
const Main = styled.div`
  color: #FFF;
  display: grid;
  background: #222529;
  grid-template-columns: 240px auto;
`
