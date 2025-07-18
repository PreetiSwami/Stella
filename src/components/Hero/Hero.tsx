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
       
       
       
                  
       <div className="about-image">
           <img src={workingGIF} alt="developer" />
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
