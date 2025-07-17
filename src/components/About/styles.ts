import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

display: flex;
  flex-direction: row;
  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: black;
  }

  h3{
    margin: 5rem 0rem;
      color:#06a7f7ff;
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
  }

.about-text{
width: 60%;
}

  .about-image{
  width: 40%;
    text-align: center;
    margin-top:0rem !important;
   img{
     width: 100%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
  .about-text{
width: 100%;
}
   flex-direction: column;
    .about-image {
      width:100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 90%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
     flex-direction: column;

    display: block;
    text-align: center;

    .hard-skills{
      justify-content: center;
    }
      .about-text{
width: 100%;
}
    .about-image{
      display: flex;
      width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }


  }

`
