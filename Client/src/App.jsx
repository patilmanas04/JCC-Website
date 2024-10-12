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
import Footer from './components/Footer/Index'
import Copyright from './components/Copyright/Index'
import Login from './components/Login/Index'
import Signup from './components/Signup/Index'

function App() {
	return (
		<>
		<ThemeProvider theme={lightTheme}>
			{/* <Navbar />
			<HeroSection />
			<About />
			<Services />
			<Benefits />
			<JCCForStudents />
			<Contact />
			<Footer />
			<Copyright /> */}
			<Login />
			{/* <Signup /> */}
		</ThemeProvider>
		</>
	)
}

export default App