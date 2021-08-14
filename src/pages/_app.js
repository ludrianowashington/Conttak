import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/themes';
import {GlobalStyle} from '../styles/Globalstyle' 

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}