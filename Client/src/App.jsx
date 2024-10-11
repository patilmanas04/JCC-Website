import { ThemeProvider } from 'styled-components'
import './App.css'
import { lightTheme } from './utils/themes'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/Index'

function App() {
	return (
		<>
		<ThemeProvider theme={lightTheme}>
			<Navbar />
			<HeroSection />
		</ThemeProvider>
		</>
	)
}

export default App