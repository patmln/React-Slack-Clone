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

const Sidebar = () => {
  const addChannel = () => {
    const promptName = prompt('Enter channel name')
  }

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
          <AddIcon onClick={addChannel}/>
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
