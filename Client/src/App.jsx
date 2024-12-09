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
import AboutUs from './pages/AboutUs/Index'
import Courses from './pages/Courses/Index'
import ContactUs from './pages/ContactUs/Index'
import IndividualCareerCounseling from "./pages/IndividualCareerCounseling/Index"
import ResumeAndCoverLetterAssistance from "./pages/ResumeAndCoverLetterAssistance/Index"
import InterviewPreparation from "./pages/InterviewPreparation/Index"
import CareerWorkshops from "./pages/CareerWorkshops/Index"
import CorporatePartnerships from "./pages/CorporatePartnerships/Index"
import NavbarLayout from './Layouts/NavbarLayout/Index'
import NoNavbarLayout from './Layouts/NoNavbarLayout/Index'

function App() {
	return (
		<>
		<ThemeProvider theme={theme}>
			<UserProvider>
				<Router>
					<Routes>
							{/* Navbar Layout */}
							<Route element={<NavbarLayout />}>
								<Route path="/" element={<Home />} />
								<Route path="/admin-dashboard" element={<AdminDashboard />} />
								<Route path="/about-us" element={<AboutUs />} />
								<Route path="/courses" element={<Courses />} />
								<Route path="/contact-us" element={<ContactUs />} />
								<Route path="/individual-career-counseling" element={<IndividualCareerCounseling />} />
								<Route path="/resume-and-cover-letter-assistance" element={<ResumeAndCoverLetterAssistance />} />
								<Route path="/interview-preparation" element={<InterviewPreparation />} />
								<Route path="/career-workshops" element={<CareerWorkshops />} />
								<Route path="/corporate-partnerships" element={<CorporatePartnerships />} />
							</Route>

							{/* No Navbar Layout */}
							<Route element={<NoNavbarLayout />}>
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />
								<Route path="/users/:userId/verify-email/:verificationToken" element={<EmailVerification />} />
								<Route path="/forgot-password" element={<ForgotPassword />} />
								<Route path="/users/:userId/reset-password/:resetToken" element={<ResetPassword />} />
								<Route path="/profile" element={<Profile />} />
								<Route path="/schedule-a-call" element={<CallScheduler />} />
								<Route path="*" element={<PageNotFound />} />
							</Route>
					</Routes>
				</Router>
			</UserProvider>
		</ThemeProvider>
		</>
	)
}

export default App