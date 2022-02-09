import {useState,useEffect} from 'react'
import styled from 'styled-components'
import {CgLock} from 'react-icons/cg'
import {
  getRecentDMs
} from '../../../utils/api/messages'
import {
  getAllUsersChannels
} from '../../../utils/api/channels'
import ListItems from './ListItems'
import TabItems from './TabItems'
import Modal from '../../Modal'
import Header from './Header'
import Huddle from './Huddle'

export default({auth}) => {
  const [channels, setChannels] = useState([])
  const [recentDMs, setRecentDMs] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [channelOpen, setChannelOpen] = useState(false)

  // Todo: update recentDMs when new message sent
  // option 1: useContext hook to create global variable
  // option 2: move sidebar states in Routes.jsx
  
  useEffect(() => {
    (async() => {
      const usersChannels = await getAllUsersChannels(auth)
      setChannels(usersChannels.data)

      const usersRecentDMs = await getRecentDMs(auth)
      const uniqueByEmail = usersRecentDMs.filter(
        (dm, index, self) =>
          index === self.findIndex(t =>  t.email === dm.email)
      )
      setRecentDMs(uniqueByEmail)
    })()
  }, [])   

  return (
    <Sidebar>
      <Header/>
      <TabItems/>
      <ListItems 
        itemKey='name'
        list={channels}
        label='Channels' 
        addGeneral={true}
        itemImg={<CgLock/>}
        setShowModal={setShowModal}
      />
      <ListItems 
        itemKey='email'
        list={recentDMs}
        label='Direct messages' 
        itemImg={<img src='./frog-boi.jpg'/>}
      />
      <Huddle active={channelOpen}/>
      <Modal onClose={() => setShowModal(false)} show={showModal}/>
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
