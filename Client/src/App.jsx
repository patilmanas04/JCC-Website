import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './utils/themes.js'
import Navbar from './components/Navbar/index.jsx'
import About from './components/About/index.jsx'

const BodyWrapper = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <BodyWrapper>
          <Navbar/>
          <About/>
        </BodyWrapper>
      </ThemeProvider>
    </>
  )
}

export default App