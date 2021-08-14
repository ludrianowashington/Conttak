import Image from 'next/image';
import styled from 'styled-components';

import myLogo from '../assets/logo.png';
import imgBuild from '../assets/building_website.svg';

import Footer from '../components/Footer';
import Header from "../components/Header";

//Estilização da página inicial
const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Main = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  background-color: ${({theme}) => theme.background};

  @media(max-width: 768px){
    height: auto;
    flex-direction: column;
  }
`
const SectionLeft = styled.div`
  width: 100%;

  padding-left: 3rem;
  padding-right: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  
`

const SectionRight = styled.div`
  width: 100%;

  padding-left: 3rem;
  padding-right: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const HeaderText = styled.h1`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  
  display: flex;
  align-self: center;

  padding-bottom: 15px;
  color: ${({theme}) => theme.textHeader};
`
const Text = styled.p`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;

  color: ${({theme}) => theme.text};
`
export const Logo = styled.div`
  width: 15rem;

  margin-bottom: 2rem;

  @media(max-width: 768px){
    width: 6em;
    
    margin-top: 2rem;
    margin-left: 0;
  }
`

//Função principal
const Home = () => {

  return (
    <Container>
      <Header/>
      <Main>
        <SectionLeft>
          <Image
            src={imgBuild}
            width={500}
          />
        </SectionLeft>
        <SectionRight>
          <Logo>
            <Image
              src={myLogo}
              alt='Logotipo Conttak'  
            />
          </Logo>
          <HeaderText>
            SITE EM CONSTRUÇÃO...
          </HeaderText>
          <Text>Estamos preparando algo íncrivel para você! </Text>
          
        </SectionRight>
      </Main>
      <Footer/>
    </Container>
  )
}
export default Home;