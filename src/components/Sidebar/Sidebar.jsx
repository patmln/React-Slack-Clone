import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AddIcon from '@material-ui/icons/Add'
import {sidebarData} from './data'
import {
  Container,
  Workspace,
  NewMessage,
  MainChannels,
  ChannelItem,
  NewChannels,
  ChannelContainer,
} from './style'
import React, { useState } from 'react'
import CreateChannel from '../CreateChannel/CreateChannel'

const Sidebar = () => {
  const addChannel = () => {
    const promptName = prompt('Enter channel name')
  }

  const [show, setShow] = useState(false)

  return (
    <Container>
      <Workspace>
        <h4>Walter</h4>
        <NewMessage>
          <AddCircleOutlineIcon/>
        </NewMessage>
      </Workspace>
      <MainChannels>
        {sidebarData.map(({icon, text}, index) => (
          <ChannelItem key={index}>
            {icon}{text}
          </ChannelItem>
        ))}
      </MainChannels>

      <ChannelContainer>
        <NewChannels>
          <div>Channels</div>
          <AddIcon onClick={() => setShow(true)}/>
          <CreateChannel onClose={() => setShow(false)} show={show}/>
        </NewChannels>
        <div className='ChannelList'>
          {/* {rooms.map(({name, id})=> (  */}
          {/*   <div key={id} className='ChannelItem'> */}
          {/*     # {name} */}
          {/*   </div> */}
          {/* ))} */}
        </div>
      </ChannelContainer>
    </Container>
  )
}

export default Sidebar
