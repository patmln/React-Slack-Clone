import SearchMember from './SearchMember'
import {CgClose} from 'react-icons/cg'
import {useState} from 'react'
import {
  Body2, ChannelName,
  Modal, Header
} from './style'

export default({openNext, onClose}) => {
  const [selected, setSelected] = useState([])

  return (<>
    {openNext &&
       <Modal onClick={e => e.stopPropagation()}>
        <Header>
          <h2>Add Members</h2>
          <CgClose size={20} onClick={onClose}/>
        </Header>
        <Body2>
          <ChannelName># {name}</ChannelName>
          <SearchMember/>
          <p>Users to be added:</p>
          <div></div>
        </Body2>
        <button>Create</button>
      </Modal>
    }
  </>)
}
