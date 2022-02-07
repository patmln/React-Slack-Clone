import {useState,useEffect} from 'react'
import styled from 'styled-components'
import {
  getAllUsersChannels
} from '../../../utils/api/channels'
import Accordion from './Accordion'
import TabItems from './TabItems'
import Header from './Header'

export default({user}) => {
  const [channels, setChannels] = useState([])

  useEffect(() => {
    (async() => {
      const res = await getAllUsersChannels(user.auth)
      setChannels(res.data)
    })()
  }, [])   

  return (
    <Sidebar>
      <Header/>
      <TabItems/>
      <Accordion channels={channels}/>
    </Sidebar>
  )
}

const Sidebar = styled.div`
  background: #1D2229;
  color: #b0b2b4;
`
