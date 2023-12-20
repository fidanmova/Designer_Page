import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Grid } from "@mui/material";
import { FaVimeoV, FaInstagram } from "react-icons/fa";

const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imagePath = `picture_mobile_landingPage/${images[randomIndex]}`;
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
    objectFit: "fill",
    width: "100%",
    height: '100%',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    left: 0,
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
    // Make text lowercase !
    // textTransform: 'lowercase'
    fontSize: "32px",
    lineHeight: "35px",
  };

  const emailStyle = {
    ...textStyle,
    whiteSpace: "normal",
    fontFamily: 'Arial black'
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      className={classes.container}
    >
      <img className={classes.image} src={currentImage} alt="Background"></img>

      <Box justifyContent="center" position="absolute" top="3%" left="2%">
        <Typography sx={{...textStyle, fontFamily: 'Arial black'}}>COMMUNICATION</Typography>
        <Typography sx={{...textStyle, fontFamily: 'Arial black'}}>DESIGN FANNY</Typography>
        <Typography sx={{...textStyle, fontFamily: 'Arial black'}}> POKRANDT</Typography>
        <Link style={{ textDecoration: "none" }} to="/project">
          <Typography
            sx={{
              ...textStyle,
              fontWeight: "unBold",
              fontFamily: "Arial, Regular",
            }}
          >
            RECENT PROJECTS
          </Typography>
        </Link>
        <Typography sx={{...textStyle, fontFamily: 'Arial black'}}>SAY HI AT</Typography>
        <a
          href="mailto:hello@fannypokrandt.com"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography sx={emailStyle}>
            HELLO@FANNY <br></br>POKRANDT.COM
          </Typography>
        </a>
      </Box>

      {/* SOCIAL MEDIA PART */}
      <Box alignSelf="flex-end" right="5%" bottom="5%" position="absolute" display='flex'>
        <Link
          to="https://vimeo.com/user146261675"
          style={{ textDecoration: "none" }}
          target="_blank"
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
          <Typography sx={textStyle}>
            <FaInstagram />
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
