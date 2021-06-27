import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
