import {useChannels} from '../../contexts/ChannelsProvider'
import {useMessages} from '../../contexts/MessagesProvider'
import AddChannel from '../addChannel/AddChannel'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {CgLock} from 'react-icons/cg'
import ListItems from './ListItems'
import TabItems from './TabItems'
import {useState} from 'react'
import Header from './Header'
import Huddle from './Huddle'

export default() => {
  const navigate = useNavigate()
  const {channels} = useChannels()
  const {recentDMs} = useMessages()
  const [showModal, setShowModal] = useState(false)

  return (
    <Sidebar>
      <Header/>
      <TabItems/>
      <ListItems 
        path='channel'
        itemKey='name'
        list={channels}
        label='Channels' 
        addGeneral={true}
        itemImg={<CgLock/>}
        addClick={() => setShowModal(true)}
      />
      <ListItems 
        path='direct'
        itemKey='email'
        list={recentDMs}
        label='Direct messages' 
        itemImg={<img src='./frog-boi.jpg'/>}
        addClick={() => navigate('new')}
      />
      <Huddle/>
      <AddChannel 
        setShow={setShowModal}
        show={showModal}
      />
    </Sidebar>
  )
}

const Sidebar = styled.div`
  display: flex;
  color: #b0b2b4;
  background: #1D2229;
  flex-direction: column;
  outline: 1px solid #34383E;
`

