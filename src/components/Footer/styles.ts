import styled from "styled-components";


export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 2rem 3rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
      font-size: 2rem;


  .logo{
    font-size: 2.8rem;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 2rem 3rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 2rem 3rem;
    p{
      font-size: 1rem;
    }
  }
`