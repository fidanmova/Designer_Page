import React, { useEffect} from "react";
import HomeDesktop from './page/Home/HomeDesktop';
import HomeMobile from './page/Home/HomeMobile'
import ProjectMobile from './page/Project/ProjectMobile'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import './index.css'
import WebFont from 'webfontloader';


// const theme = createTheme({
//   typography: {
//     fontFamily: 'Arial Black',
//   },
// });

// let theme= createTheme()
// theme= responsiveFontSizes(theme)

const theme = createTheme( {
  typography: {
    fontFamily : 'Arial Black, Arial, sans-serif'
  }
})

function App() {

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ['Arial Black', 'Chilanka', 'Arial']
  //     }
  //   });
  //  }, []);

   
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <HomeDesktop/>
    </div>
  </ThemeProvider>
  );
}

export default App;
