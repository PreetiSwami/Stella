import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
  justify-content: center;
    & > p{
      font-size: 2rem;
    }
    h1{
      font-size: 4rem;
      margin-top:5rem
    }
h2{
margin: 2rem 0;
}
    h3{
      color:#06a7f7ff;
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 3rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .button-container{
margin: 7rem 0rem;

  }

  .button{
    padding: 1.4rem 6rem;
    color:black;
    
  }

  .hero-image{
  margin-top: 15rem;
    img{
      max-width: 300px;
    }
  }


  @media(max-width: 960px){
  
    display: block;
    font-size: 3rem;
    margin-top: 10%;
    .hero-text{
    h1{
      font-size: 3rem;
      }

      h2,h3{
        font-size: 2rem;
      }
    }
    
    
      .hero-image{
  margin-top: 1rem;
    img{
      max-width: 300px;
    }
  }
  }

  .button-container{
margin: 5rem 0rem;
justify-content: center;


  }

  .button{
    padding: 0.8rem 2rem;
    color:black;
    font-size:2rem;
    
  }

  .about-image{
    text-align: center;
    width: 100%;
   img{
     width: 40vw;
     height:150vh
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }


  @media(max-width: 600px){
    margin-top: 15%;
  }
  @media(max-width: 480px){
    margin-top: 15%;
  }
`