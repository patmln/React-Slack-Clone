import {useChannels} from '../../contexts/ChannelsProvider'
import {useUsers} from '../../contexts/UsersProvider'
import SearchMember from './SearchMember'
import {CgClose} from 'react-icons/cg'
import styled from 'styled-components'
import {Modal, Header} from './style'
import {useState} from 'react'

export default(props) => {
  const {getEmailById} = useUsers()
  const {addChannel} = useChannels()
  const {openNext, channelName, onClose} = props
  const [selected, setSelected] = useState([])

  const handleOnClick = () => {
    if(!selected) return
    console.log(selected, channelName)

    // addChannel({
    //   'name': name,
    //   'users_ids': selected
    // }) 
  }

  return (<>
    {openNext &&
       <Modal onClick={e => e.stopPropagation()}>
        <Header>
          <h2>Add Members</h2>
          <CgClose size={20} onClick={onClose}/>
        </Header>
        <Content>
          <p># {channelName}</p>
          <SearchMember setSelected={setSelected}/>
          <h4>Users to be added:</h4>
          {selected && 
            selected.map((id, i) => (
              <Selected key={id}>
                <Image src='./frog-boi.jpg'/>
                <p>{getEmailById(id)}</p>
                <CgClose size={18}/>
              </Selected>
            ))
          }
        </Content>
        <button onClick={handleOnClick}>Create</button>
      </Modal>
    }
  </>)
}

const Content = styled.div`
  display: flex;
  max-height: 60vh;
  padding-top: 10px;
  overflow-y: scroll;
  align-items: center;
  scrollbar-width: none;
  flex-direction: column;
  p {
    color: #b0b2b4;
    font-size: 14px;
    padding-bottom: 30px;   
  }
  h4 {
    font-size: 14px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  :-webkit-scrollbar { display: none; }
`

const Selected = styled.div`
  width: 80%;
  height: 26px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  :hover { background: #1a2a34; }
  p { font-size: 14px; }
  svg { 
    margin-left: auto; 
    :hover { background: #23333B; }
  }
`

const Image = styled.img`
  height: 100%;
  overflow: hidden;
  margin-right: 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`
