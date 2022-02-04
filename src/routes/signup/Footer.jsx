import {VscChevronDown} from 'react-icons/vsc'
import {FiGlobe} from 'react-icons/fi'
import { 
  PageFooter,
  FooterChild
} from './style'

const Footer = () => (
  <PageFooter>
    <FooterChild>
      <span >
        <a href="/">Privacy & Terms</a>
      </span>
      <span>
        <a href="/">Contact us</a>
      </span>
      <span>
        <a href="/"> 
          <FiGlobe/>
          <span className="regionLabel">
            Change region
          </span> 
          <VscChevronDown/>
        </a> 
      </span>
    </FooterChild>
  </PageFooter>
)

export default Footer
