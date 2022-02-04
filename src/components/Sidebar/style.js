import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  background: #1D2229;
  color: #b0b2b4;
`

export const Header = styled.div`
  height: 49px;
  display: flex;
  color: whitesmoke;
  padding-left: 16px;
  align-items: center;
  margin-bottom: 20px;
  outline: 1px solid #34383E;
  p {
    font-size: 18px;
    font-weight: 700;
  }
`

export const NewMessage = styled(Link)`
  width: 32px;
  height: 32px;
  display: flex;
  cursor: pointer;
  background: #FFF;
  border-radius: 50%;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`
const listItemStyle = `
  height: 28px;
  display: flex;
  font-size: 15px;
  cursor: pointer;
  padding-left: 19px;
  align-items: center;
  span { margin-left: 8px; } 
`
export const ListItem = styled.div`
  ${listItemStyle}
  &:hover { background: #313843; }
`
export const MoreItem = styled.div`
  ${listItemStyle}
  &:hover { color: whitesmoke; }
`

export const Accordion = styled.div`
  margin-top: 10px;
`
export const ChannelsTab = styled.div`
  height: 28px;
  display: flex;
  cursor: pointer;
  padding-left: 19px;
  padding-right: 12px;
  align-items: center;
  justify-content: space-between;
`
