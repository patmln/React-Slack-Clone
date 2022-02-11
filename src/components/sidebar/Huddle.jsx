import {MdPodcasts} from 'react-icons/md'
import styled from 'styled-components'

export default() => (
  <Huddle>
    <MdPodcasts size={20}/>
    <p>batch15</p>
  </Huddle>
)

const Huddle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: auto;
  position: relative;
  padding-left: 25px;
  align-items: center;
  outline: 1px solid #34383E;
  p { margin-left: 10px; }
  : hover { color: #fff; }
`

