import { ThemeProvider } from 'styled-components'
import './App.css'
import { lightTheme } from './utils/themes'

function App() {
	return (
		<>
		<ThemeProvider theme={lightTheme}>
			
		</ThemeProvider>
		</>
	)
}

export default App