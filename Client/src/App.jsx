import { ThemeProvider } from 'styled-components'
import './App.css'
import { lightTheme } from './utils/themes'
import Login from './components/Login/Index'
import Signup from './components/Signup/Index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Index'
import EmailVerification from './components/EmailVerification/Index'
import Profile from './components/Profile/Index'

function App() {
	return (
		<>
		<ThemeProvider theme={lightTheme}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/users/:userId/verify-email/:verificationToken" element={<EmailVerification />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Router>
		</ThemeProvider>
		</>
	)
}

export default App