import {useState,useEffect} from 'react'

import {RiArrowRightSFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import {BsChatText} from 'react-icons/bs'
import {
  HiChevronDown, 
  HiOutlinePencilAlt,
  HiPlus, HiAtSymbol
} from 'react-icons/hi'

import AddChannelModal from '../CreateChannel/AddChannelModal'
import {getAllUsersChannels} from '../../utils/api'
import {
  Container, Header,
  NewMessage, ListItem, 
  MoreItem, ChannelsTab, 
  Accordion
} from './style'

const Sidebar = ({user}) => {
  const [show, setShow] = useState(false)
  const [channels, setChannels] = useState([])

  useEffect(() => {
    (async() => {
      const {data} = await getAllUsersChannels(user.authData)
      setChannels(data)
    })()
  }, [])   

  return (
    <Container>
      <Header>
        <p>Avion School</p>
        <HiChevronDown/>
        <NewMessage to='/newMessage'>
          <HiOutlinePencilAlt size={18}/>
        </NewMessage> 
      </Header>
      <ListItem>
        <BsChatText size={18}/>
        <span>Threads</span>
      </ListItem>
      <ListItem>
        <HiAtSymbol size={18}/>
        <span>Mentions & reactions</span>
      </ListItem>
      <MoreItem>
        <FiMoreVertical size={18}/>
        <span>More</span>
      </MoreItem>
      <Accordion>
        <ChannelsTab>
          <RiArrowRightSFill size={20}/>
          <div>Channels</div>
          <FiMoreVertical size={18}/>
          <HiPlus size={20} onClick={() => setShow(true)}/>
          <AddChannelModal 
            onClose={() => setShow(false)} show={show}/>
        </ChannelsTab>
        <div className='ChannelList'>{
          channels.map(({name}, index) => (
            <ListItem key={index}>
              #{name}
            </ListItem> 
          ))
        }</div>
      </Accordion>

      <Accordion>
        <ChannelsTab>
          <RiArrowRightSFill size={20}/>
          <div>Direct Messages</div>
          <FiMoreVertical size={18}/>
          <HiPlus size={20} onClick={() => setShow(true)}/>
          <AddChannelModal 
            show={show}
            onClose={() => setShow(false)}
          />
        </ChannelsTab>
      </Accordion>
    </Container>
  )
}

export default Sidebar
