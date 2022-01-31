import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

import {
  Container, Main,
  SearchBox, Search,
  UserContent, Name, Image,
} from './style'

const Header = ({user, signOut}) => {
  return (
    <Container>
      <Main>
        <AccessTimeIcon/>
        <SearchBox>
          <Search>
            <input type="text" placeholder="Search..."/>
          </Search>
        </SearchBox>
        <HelpOutlineIcon/>
      </Main>
      <UserContent>
        <Name>{user.name}</Name>
        <Image onClick={signOut}>
          <img src="https://i.imgur.com/6VBx3io.png"/>
        </Image>
      </UserContent>
    </Container>
  )
}

export default Header
