import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import workingGIF from "../../assets/Developer activity-cuate-2.svg";



export function Hero() {
  return (
    <Container id="home" className="hero-container">
      <div className="hero-text">
        {/* <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Stella</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>We Turn Browsers into Buyers</h3>

        </ScrollAnimation> */}
       
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
                  
<div className="about-image">
               <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
                 <img src={workingGIF} alt="developer" />
               </ScrollAnimation>
             </div>
         
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
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
        </ScrollAnimation> */}
      </div>
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <h1>Whether you're launching a startup or upgrading your enterprise systems, we’re here to solve your toughest tech challenges.</h1>

<h2>Why you need Stella?</h2>
<h3>More Clicks. More Carts. More Conversions</h3>
       
         <BrowserRouter>
           <div className="button-container">
             <NavHashLink smooth to="#contact" className="button">Get Your Free Consultation</NavHashLink>
            
           </div>
         </BrowserRouter>
               </ScrollAnimation>
      </div>
    </Container>
  )
}
