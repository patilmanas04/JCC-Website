import { ThemeProvider } from 'styled-components'
import './App.css'
import { lightTheme } from './utils/themes'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/Index'
import About from './components/About/Index'
import Services from './components/Services/Index'
import Benefits from './components/Benefits/Index'

function App() {
	return (
		<>
		<ThemeProvider theme={lightTheme}>
			<Navbar />
			<HeroSection />
			<About />
			<Services />
			<Benefits />
		</ThemeProvider>
		</>
	)
}

export default App