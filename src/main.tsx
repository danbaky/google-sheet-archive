import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { yellow } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: '#ffeb3b',
    },
  },
  components: {
    // Name of the component
    MuiAccordion: {

    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
      },
    },
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
