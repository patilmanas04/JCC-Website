import { ThemeProvider } from 'styled-components'
import './App.css'
import { theme } from './utils/themes'
import Login from './pages/Login/Index'
import Signup from './pages/Signup/Index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Index'
import EmailVerification from './pages/EmailVerification/Index'
import Profile from './pages/Profile/Index'
import CallScheduler from './pages/CallScheduler/Index'
import AdminDashboard from './pages/AdminDashboard/Index'
import UserProvider from './contexts/UserProvider'
import ForgotPassword from './pages/ForgotPassword/Index'
import ResetPassword from './pages/ResetPassword/Index'
import PageNotFound from './pages/PageNotFound/Index'

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
							<Route path="/forgot-password" element={<ForgotPassword />} />
							<Route path="/users/:userId/reset-password/:resetToken" element={<ResetPassword />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/scheduleacall" element={<CallScheduler />} />
							<Route path="/admin-dashboard" element={<AdminDashboard />} />
							<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Router>
			</UserProvider>
		</ThemeProvider>
		</>
	)
}

export default App