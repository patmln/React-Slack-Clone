import {HiChevronDown} from 'react-icons/hi'
import styled from 'styled-components'

const Accordion = props => {
  const {
    onClick, itemName, 
    itemContent, isActive
  } = props

  return (<>
    <Header onClick={onClick}>
      {itemName}
      <Icon isActive={isActive}>
        Some Items
      </Icon>
    </Header>
    <Content 
      itemName={itemName} 
      isActive={isActive}>
      <Inner id={itemName}>
        {itemContent}
      </Inner>
    </Content>
  </>)
}

export default Accordion

const Container = styled.div`
  color: #F9F9F9;
  width: 18.75em;
  overflow: hidden;
  background: #27262c;
`
const Inner = styled.div`
  padding: 1rem;
  color: #C3C1CB;
  position: absolute; 
`

const Header = styled.button`
  width: 100%;
  height: 4rem;
  display: flex;
  color: inherit;
  padding: 0 1rem;
  font-size: 1rem;
  cursor: pointer;
  background: #212025;
  align-items: center;
  justify-content: space-between;
`

const Icon = styled(HiChevronDown)`
  transform: rotate(${props => props.isActive ? -180 : 0}deg); 
  transition: all .2s;
`

const Content = styled.div`
  position: relative;
  overflow: hidden;
  height: ${props => {
    const inner = document.getElementById(props.itemName)
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }}
  transition: height 0.35s;
`
