import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Grid } from "@mui/material";
import { FaVimeoV, FaInstagram } from "react-icons/fa";
import useBreakpoints from "../../hooks/useBreakpoints";
import HomeMobile from "./HomeMobile";

const images = [
// "01.jpg",
  // "02.jpg",
  // "03.jpg",
  // "04.jpg",
  "05.jpg",
  // "06.jpg",
  // "07.jpg",
  // "08.jpg",
//   "09.jpg",
  // "10.jpg",
//   "11.jpg",
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imagePath = `picture_landingPage/${images[randomIndex]}`;
  console.log("Image Path:", imagePath);
  return imagePath;
};

const useStyles = makeStyles((theme) => ({
    container: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      filter: "brightness(70%)",  
  
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%", 
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    filter: "brightness(70%)",
}));

export default function HomeDesktop() {
  const [currentImage, setCurrentImage] = useState(getRandomImage());
  const classes = useStyles({ currentImage });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newImage = getRandomImage();
      setCurrentImage(newImage);
    }, 2000); // Change background every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  const textStyle = {
    color: "#0AFF00",
    fontWeight: "bold",
    textOverflow: "ellipsis",
    fontSize: '25px',
    lineHeight:'30px',
  };

  const emailStyle = {
    ...textStyle,
    whiteSpace: "normal",
  };

  return (
        <div className={classes.container}>
          <img src={currentImage} alt="Background" className={classes.image} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <Grid
            container
            padding='20% 20px 0'
            display="flex"
            flexDirection={{sm: 'column', md: 'row'}}
            justifyContent={"space-between"}
            alignItems="flex-start"
          >
            <Grid  sx={4} >
              <Typography sx={textStyle}>COMMUNICATION</Typography>
              <Typography sx={textStyle}>DESIGN</Typography>
              <Typography sx={textStyle}>FANNY POKRANDT</Typography>
            </Grid>

            <Grid sx={7}>
              <Link style={{ textDecoration: "none" }} to="/project">
                <Typography
                  sx={{ ...textStyle, "&:hover": { color: "#FFFF00" } }}
                >
                  RECENT PROJECTS
                </Typography>
              </Link>
              <Typography sx={textStyle}>SAY HI AT</Typography>
              <a
                href="mailto:hello@fannypokrandt.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{ ...emailStyle, "&:hover": { color: "#FFFF00" } }}
                >
                  HELLO@FANNYPOKRANDT.COM
                </Typography>
              </a>
            </Grid>
            {/* SOCIAL MEDIA */}`
            <Grid
               sx={1} 
              display="flex"
              alignContent="flex-end"
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <Link
                to="https://vimeo.com/user146261675"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    ...textStyle,
                    paddingRight: "20px",
                    "&:hover": { color: "#FFFF00" },
                  }}
                >
                  <FaVimeoV />
                </Typography>
              </Link>
              <Link
                to="https://www.instagram.com/funny2fanny/ "
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{ ...textStyle, "&:hover": { color: "#FFFF00" } }}
                >
                  <FaInstagram />
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </div>
        </div>
  );
}
