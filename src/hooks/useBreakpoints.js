import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


const useBreakpoints = () => {
    const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down(`sm`));
    // const isTablet = useMediaQuery(theme.breakpoints.between(`sm`, 1181));
    const isMobile = useMediaQuery('(max-width: 600px)'); // Define the breakpoint for mobile devices
    const isTablet = useMediaQuery('(max-width: 1024px)'); // Define the breakpoint for tablets
    

    return {
      isMobile,
      isTablet,
      theme,
    };
  };
  
  export default useBreakpoints;