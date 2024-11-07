import { ThemeProvider } from 'styled-components'
import './App.css'
import { theme } from './utils/themes'
import Login from './components/Login/Index'
import Signup from './components/Signup/Index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Index'
import EmailVerification from './components/EmailVerification/Index'
import Profile from './components/Profile/Index'
import CallScheduler from './components/CallScheduler/Index'
import AdminDashboard from './components/AdminDashboard/Index'
import UserProvider from './contexts/UserProvider'

function App() {
	return (
		<>
		<ThemeProvider theme={theme}>
			<UserProvider>
				<Router>
					<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/users/:userId/verify-email/:verificationToken" element={<EmailVerification />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/scheduleacall" element={<CallScheduler />} />
							<Route path="/admin-dashboard" element={<AdminDashboard />} />
					</Routes>
				</Router>
			</UserProvider>
		</ThemeProvider>
		</>
	)
}

export default App