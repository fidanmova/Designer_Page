import HomeDesktop from './page/Home/HomeDesktop';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Arial Black',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <HomeDesktop/>
    </div>
  </ThemeProvider>
  );
}

export default App;
