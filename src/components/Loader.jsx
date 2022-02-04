import styled, {keyframes} from 'styled-components'

const size = '2.5em'
const thickness = '0.5em'
const lat = `(${size} - ${thickness})/2`
const offset = `${lat} - ${thickness}`
const colors = `
  hsla(337, 84, 48, 0.75)
  hsla(160, 50, 48, 0.75)
  hsla(190, 61, 65, 0.75)
  hsla( 41, 82, 52, 0.75)`

const beforeAnim = keyframes`
  0% {
    width: ${thickness};
    box-shadow:
      ${lat} (-${offset}) nth(${colors}, 1),
      (-${lat}) ${offset} nth(${colors}, 3);
  }
  35% {
    width: ${size};
    box-shadow:
      0 (-${offset}) nth(${colors}, 1),
      0   ${offset}  nth(${colors}, 3);
  }
  70% {
    width: ${thickness};
    box-shadow:
      (-${lat}) (-${offset}) nth(${colors}, 1),
      ${lat} ${offset} nth(${colors}, 3);
  }
  100% {
    box-shadow:
      ${lat} (-${offset}) nth(${colors}, 1),
      (-${lat}) ${offset} nth(${colors}, 3);
  }
`

const afterAnim = keyframes`
  0% {
    height: ${thickness};
    box-shadow:
      ${offset} ${lat} nth(${colors}, 2),
      (-${offset}) (-${lat}) nth(${colors}, 4);
  }
  35% {
    height: ${size};
    box-shadow:
        ${offset}  0 nth(${colors}, 2),
      (-${offset}) 0 nth(${colors}, 4);
  }
  70% {
    height: ${thickness};
    box-shadow:
      ${offset} (-${lat}) nth(${colors}, 2),
      (-${offset}) ${lat} nth(${colors}, 4);
  }
  100% {
    box-shadow:
      ${offset} ${lat} nth(${colors}, 2),
      (-${offset}) (-${lat}) nth(${colors}, 4);
  }
`

export const Loader = styled.div`
  position: relative;
  width: ${size};
  height: ${size};
  transform: rotate(165deg);
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: ${thickness};
    height: ${thickness};
    border-radius: ${thickness}/2;
    transform: translate(-50%, -50%);
  }
  &:before { animation: ${beforeAnim} 2s infinite; }
  &:after { animation: ${afterAnim} 2s infinite; }
`
