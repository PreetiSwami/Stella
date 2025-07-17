import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color:#06a7f7ff;
      font-weight: 600;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 25rem;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 5rem;
      padding: 1rem 2rem;
      transition: background-color 0.25s;
      img{
        width: 2rem;
      }
      a{
        color: var(--black);
        font-weight: 500;
      }
      &:hover{
        background-color:  #fede23;
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;

      }
    }
  }

`
/* old one - 2/1/2023 -
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
