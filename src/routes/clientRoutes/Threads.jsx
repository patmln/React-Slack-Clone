import styled from 'styled-components'

export default() => (
  <Container>
    <Header>
      <p>Threads</p>
    </Header>
    <div></div>
  </Container>
)

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto;
`

const Header = styled.div`
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
  p { font-weight: 700; }
`
