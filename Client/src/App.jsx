import { ThemeProvider } from 'styled-components'
import './App.css'
import { lightTheme } from './utils/themes'
import Login from './components/Login/Index'
import Signup from './components/Signup/Index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Index'

function App() {
	return (
		<>
		<ThemeProvider theme={lightTheme}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</ThemeProvider>
		</>
	)
}

export default App