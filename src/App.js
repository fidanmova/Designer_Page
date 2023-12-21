import HomeDesktop from './page/Home/HomeDesktop';
import HomeMobile from './page/Home/HomeMobile'
import ProjectMobile from './page/Project/ProjectMobile'
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
      <HomeMobile/>
      <ProjectMobile/>
    </div>
  </ThemeProvider>
  );
}

export default App;
