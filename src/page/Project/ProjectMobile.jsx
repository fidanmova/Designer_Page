import React, { useEffect, useState} from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { FaVimeoV, FaInstagram } from "react-icons/fa";

import './projectHome.css'

import ProjectMobileGallery from "./ProjectMobileGallery";
const videoPath = "recent_projects/banner_kleinkurz.mp4";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  video: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  socialMedia: {
    position: "sticky",
    bottom: 0,
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 5,
  },
}));

const BigTextStyle = {
  color: "#0AFF00",
  fontSize: "32px",
  lineHeight: "35px",
  fontFamily: "Arial",
};

const BigBoldTextStyle = {
  // color: "#0AFF00",
  // fontSize: "32px",
  // lineHeight: "35px",
  // fontFamily: "Arial black",
};

const smallText = {
  fontSize: "25px",
  lineHeight: "33px",
  color: "#0AFF00",
};

const SocialMedia = {
  // color: "#0AFF00",
  fontSize: "32px",
  lineHeight: "35px",
  fontFamily: "Arial Black",
  mixBlendMode: "difference",
};

export default function ProjectDesktop() {
  const classes = useStyles();
  const [scrollColor, setScrollColor] = useState("#0AFF00");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50;

      if (scrollPosition > threshold) {
        setScrollColor((prevColor) =>
          prevColor === "#0AFF00" ? "purple" : "#0AFF00"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const socialMediaStyle = {
    ...SocialMedia,
    color: scrollColor,
  };

  return (
    <Box>
      <Box className={classes.container}>
        <video className={classes.video} autoPlay loop muted playsInline>
          <source src={videoPath} type="video/mp4" />
        </video>
        <Grid
          paddingLeft="3%"
          paddingRight="3%"
          paddingTop="7%"
          // paddingBottom="3%"
          position="absolute"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
          height="85%"
          top="0"
        >
          <Box>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography className="arialBlack" sx={BigTextStyle}>COMMUNICATION</Typography>
              <Typography sx={BigTextStyle}>DESIGN FANNY</Typography>
            </Link>
            <Typography sx={BigTextStyle}>POKRANDT</Typography>
            <p className="arialBlack" >RECENT PROJECTS</p>
            <Typography sx={BigTextStyle}>SAY HI AT</Typography>
            <a
              href="mailto:hello@fannypokrandt.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
            <Typography sx={BigTextStyle}>HELLO@FANNY</Typography>
            <Typography sx={BigTextStyle}>POKRANDT.COM</Typography>          
            </a>
          </Box>

          <Box>
            <div>
            <p className="arialBlack">UNDER THE </p>
            <p className="arialBlack" paddingBottom="2%" >
              SAME SKY
            </p>

            </div>
            <Typography sx={BigTextStyle}>Video and Sound</Typography>
            <Typography paddingBottom="2%" sx={BigTextStyle}>
              Installation
            </Typography>
            <Typography sx={smallText} width="80%%">
              Shown at <br></br> 06.07.2023 at Kampnagel Hamburg <br></br> 21.09.2023 -
              21.11.2023 at "The Cup Flows Over: Art from the Soul of Iran" at
              Gallery Bergen, New Jersey
            </Typography>
          </Box>
        </Grid>
      </Box>

      <Box>
        <ProjectMobileGallery />
      </Box>

      {/* SOCIAL MEDIA PART */}
      <Box
        className={classes.socialMedia}
        position="sticky"
        bottom="0"
        padding="3%"
      >
        <Link
          to="https://vimeo.com/user146261675"
          target="_blank"
          style={{ textDecoration: "none", paddingRight: "10px" }}
        >
          <Typography sx={socialMediaStyle}>
            <FaVimeoV />
          </Typography>
        </Link>
        <Link
          to="https://www.instagram.com/funny2fanny/ "
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Typography sx={socialMediaStyle}>
            <FaInstagram />
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
