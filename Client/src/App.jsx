import { ThemeProvider } from 'styled-components'
import './App.css'
import { lightTheme } from './utils/themes'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/Index'
import About from './components/About/Index'

function App() {
	return (
		<>
		<ThemeProvider theme={lightTheme}>
			<Navbar />
			<HeroSection />
			<About />
		</ThemeProvider>
		</>
	)
}

export default App