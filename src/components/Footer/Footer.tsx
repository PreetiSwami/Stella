import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">

        <span className="logo">stelladigitalized@gmail.com</span>


      <div className="social-media">
        <a
        href="https://www.linkedin.com/in/preeti-swamy-a96a21b3"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=%2B919818915966&text=Hello+Stella.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>


      </div>
    </Container>
  )
}
