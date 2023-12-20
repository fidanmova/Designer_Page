import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import mobile_1 from "./projectMobileMedia/mobile_1.jpg";
import mobile_2 from "./projectMobileMedia/mobile_2.jpg";
import mobile_3 from "./projectMobileMedia/mobile_3.jpg";
import mobile_6 from "./projectMobileMedia/mobile_6.jpg";
import bckGroundImage from "./projectMobileMedia/projectmobileBckg.jpg";


const gifPath = "recent_projects/GIF.mp4";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    color: "#0AFF00",
  },

  gif: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
  },
}));

export default function ProjectDesktop() {
  const classes = useStyles();
  const subHeroText = {
    fontSize: "22px",
    fontWeight: "bold",
    lineHeight: "28px",
    color: "#0AFF00",
  };
  const imageText = {
    fontSize: "22px",
    lineHeight: "23px",
    color: "#0AFF00",
  };
  const slideImages = {
    position: "sticky",
    objectFit: "cover",
  };

  return (
    <div>
      <Box className={slideImages} >
        <img src={bckGroundImage} alt="sky" className={classes.image} />
      </Box>

      <Box padding="3%" >
        <Box marginTop="15%" marginBottom="20%" position="sticky">
          <Typography sx={subHeroText} width="90%">
            Under the Same Sky explores the point of incomplete arrival of a
            young couple in England. The audio recordings were made during a
            visit to London in February 2023. The artist had met the speakers
            two years earlier in Sarajevo, as they traveled from Iran to Europe.
            The focus is on the protagonists’ current situation, how they see
            themselves, their expectations and hopes now, looking back on the
            journey that lies behind them. Guided by the question of what
            becomes of hope when arriving does not live up to expectations, the
            project searches for a foothold for the protagonists.
          </Typography>
        </Box>
        {/* Installation */}
        <Box marginBottom="15%">
          <img
            src={mobile_1}
            alt="Installation"
            style={{ width: "100%", height: "100%" }}
          />
          <Typography sx={imageText}>
            Video and Sound Installation Kampnagel Hamburg
          </Typography>
        </Box>
        <img
          src={mobile_2}
          alt="Installation Two"
          style={{ width: "100%", height: "100%", marginBottom: "15%" }}
        />

        {/* Poster */}
        <Box marginBottom="15%">
          <img
            src={mobile_3}
            alt="Poster"
            style={{ width: "100%", height: "100%" }}
          />
          <Typography sx={imageText}>
            Transcripts of an endless journey, Poster
          </Typography>
        </Box>
        {/* Gif */}
        <Box marginBottom="10%">
          <video className={` ${classes.gif}`} autoPlay loop muted>
            <source src={gifPath} type="video/mp4" />
          </video>
          <img
            src={mobile_6}
            alt="exhibition"
            style={{ width: "100%", height: "100%", marginTop:'10%' }}
          />
          <Typography sx={imageText}>
            Transcripts of an endless journey Booklet with 96 pages 105mm x 145mm
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
