import styled from 'styled-components'

const NewMessage = () => {
  return (
    <Container>
      <Header>
        <h4>New message</h4>
      </Header>
      <Search>
        <h4>To:</h4>
        <input placeholder='#a-channel, @somebody, or somebody@example.com'/>
      </Search>
    </Container>
  )
}

export default NewMessage

const Container = styled.div`
  display: grid;
  color: #d1d2d3;
  grid-template-rows: 49px 49px auto min-content;
`

const Header = styled.div`
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;
`

const Search = styled.div`
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;

  input {
    height: 100%;
    width: 100%;
    color:#a4a4a6;
    font-size: 14px;
    margin-left: 8px;
    background: transparent;
    &:focus { outline: 0; }
  }
`
