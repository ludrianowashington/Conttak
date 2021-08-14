import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;

  padding: .2rem;
  background-color: ${({theme}) => theme.background};

  @media(max-width: 768px){
    
      display: flex;
      justify-content: center;
      align-content: center;
    
  }
`
export const Logo = styled.div`
  width: 7rem;

  margin-top: 2rem;
  margin-left: 5rem;

  @media(max-width: 768px){
    width: 6em;
    
    margin-top: 2rem;
    margin-left: 0;
  }
`