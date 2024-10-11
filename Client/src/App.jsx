import { ThemeProvider } from 'styled-components'
import './App.css'
import { lightTheme } from './utils/themes'
import Navbar from './components/Navbar'

function App() {
	return (
		<>
		<ThemeProvider theme={lightTheme}>
			<Navbar />
		</ThemeProvider>
		</>
	)
}

export default App