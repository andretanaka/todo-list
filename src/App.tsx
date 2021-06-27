import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

function App(): JSX.Element {
  return <ThemeProvider theme={theme}>TODO LIST</ThemeProvider>
}

export default App
