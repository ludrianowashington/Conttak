import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;

  padding: 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.backgroundFooter};
`
export const Text = styled.p`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: .9rem;

  color: ${({theme}) => theme.text};
`
export const Text2 = styled.p`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: .8rem;

  color: ${({theme}) => theme.text};
`