import SearchMember from './SearchMember'
import {CgClose} from 'react-icons/cg'
import {useState} from 'react'
import {
  Body2, ChannelName,
  Modal, Header
} from './style'
import { useChannels } from '../../contexts/ChannelsProvider'


export default(props) => {
  const {addChannel} = useChannels()
  const {openNext, nameRef, onClose} = props
  const [selected, setSelected] = useState([])

  const handleOnClick = () => {
    const name = nameRef.current.value
    if(!selected) return

    addChannel({
      'name': name,
      'users_ids': selected
    })
  }

  return (<>
    {openNext &&
       <Modal onClick={e => e.stopPropagation()}>
        <Header>
          <h2>Add Members</h2>
          <CgClose size={20} onClick={onClose}/>
        </Header>
        <Body2>
          <ChannelName># {nameRef.current.value}</ChannelName>
          <SearchMember/>
          <p>Users to be added:</p>
          <div></div>
        </Body2>
        <button onClick={handleOnClick}>Create</button>
      </Modal>
    }
  </>)
}
