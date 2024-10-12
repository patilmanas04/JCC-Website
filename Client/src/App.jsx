import { ThemeProvider } from 'styled-components'
import './App.css'
import { lightTheme } from './utils/themes'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/Index'
import About from './components/About/Index'
import Services from './components/Services/Index'
import Benefits from './components/Benefits/Index'
import JCCForStudents from './components/JCCForStudents/Index'
import Contact from './components/Contact/Index'

function App() {
	return (
		<>
		<ThemeProvider theme={lightTheme}>
			<Navbar />
			<HeroSection />
			<About />
			<Services />
			<Benefits />
			<JCCForStudents />
			<Contact />
		</ThemeProvider>
		</>
	)
}

export default App