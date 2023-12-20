import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Grid } from "@mui/material";
import { FaVimeoV, FaInstagram } from "react-icons/fa";
import ProjectMobile from "./ProjectMobile";
import useBreakpoints from "../../hooks/useBreakpoints";
import { motion } from "framer-motion";
import PosterAustellung from "./projectHomeMedia/PosterAustellung.jpg";
import Installation from "./projectHomeMedia/Installation.jpg";
import OpenBook from "./projectHomeMedia/OpenBook.jpg";
import BookCover from "./projectHomeMedia/BookCover.jpg";
import Installation2 from "./projectHomeMedia/Installation_02.jpg";

import './projectHome.css'

const videoPath = "recent_projects/banner_kleinkurz.mp4";
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
  video: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
  },
  gif: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
  },
}));

export default function ProjectDesktop() {
  const classes = useStyles();
  const { isTablet, isMobile } = useBreakpoints();

  const BigTextStyle = {
    color: "#0AFF00",
    fontWeight: "bold",
    fontSize: { md: "30px", sm: "18px" },
    lineHeight: { md: "35px", sm: "30px" },
    overflow: "hidden",
    textOverflow: "ellipsis",
    opacity: 0.6,
    // textTransform: "lowercase",
    fontFamily: "Arial Black",
  };

  const subHeroText = {
    fontSize: { md: "18px", sm: "16px" },
    fontWeight: { md: "bold" },
    lineHeight: { md: "24px", sm: "20px", xs: "23px" },
    color: "#0AFF00",
  };

  const emailStyle = {
    ...BigTextStyle,
    whiteSpace: "normal",
  };

  const slideImages = {
    position: "sticky",
    objectFit: "cover",
  };

  return (
    <>
      {isMobile || isTablet ? (
        <ProjectMobile />
      ) : (
        <div>
          <div className={classes.container}>
            <video className={classes.video} autoPlay loop muted>
              <source src={videoPath} type="video/mp4" />
            </video>

            <Grid
              container
              position="fixed"
              mix-blend-mode="difference"
              padding={{ md: "18% 40px 0", sm:'7% 20px 0'}}
              display="flex"
              justifyContent="space-between"
              sx={{
                flexDirection: { sm: "column", md: "column" },
              }}
            >
              {/* First Part */}
              <motion.div
                initial={{ y: "0" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                animate={{ y: -250 }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginBottom={{ md: "30px", sm: "20px" }}
                  sx={{
                    flexDirection: { xs: "column", sm: "row", md: "row" },
                  }}
                >
                  <Grid item md={3}>
                    <Link style={{ textDecoration: "none" }} to="/">
                      <Typography
                        sx={{
                          ...BigTextStyle,
                          "&:hover": { color: "#FFFF00" },
                        }}
                      >
                        COMMUNICATION <br></br>DESIGN<br></br>FANNY POKRANDT
                      </Typography>
                    </Link>
                  </Grid>

                  <Grid item md={6}>
                    <Typography sx={{ ...BigTextStyle, opacity: "1" }}>
                      RECENT PROJECTS
                    </Typography>
                    <Typography sx={BigTextStyle}>SAY HI AT</Typography>
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

                  {/* SOCIAL MEDIA PART */}
                  <Grid item md={1} display="flex">
                    <Link
                      to="https://vimeo.com/user146261675"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          ...BigTextStyle,
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
                        sx={{
                          ...BigTextStyle,
                          "&:hover": { color: "#FFFF00" },
                        }}
                      >
                        <FaInstagram />
                      </Typography>
                    </Link>
                  </Grid>
                </Box>

                {/* Second Part STARTS HERE ==>> WITH UNDER THE SAME SKY  */}
                <motion.div
                  initial={{ opacity: -2 }}
                  whileInView={{ x: 0, opacity: 3 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                >
                  <Grid
                    container
                    display="flex"
                    justifyContent="space-between"
                    marginTop="60px"
                    sx={{
                      flexDirection: { sm: "row", md: "row" },
                    }}
                  >
                    <Grid
                      md={3}
                      sm={4}
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { md: "27.5px", sm: "18px" },
                            fontFamily: "Arial Black",
                            lineHeight: { md: "35px", sm: "30px" },
                          }}
                        >
                          UNDER THE SAME SKY
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { md: "28px", sm: "18px" },
                            fontFamily: "Arial",
                            fontWeight: "bold",
                            lineHeight: { md: "35px", sm: "30px" },
                          }}
                        >
                          Video and Sound Installation
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          sx={{ ...subHeroText, fontFamily: "Arial" }}
                        >
                          Shown at <br></br> 06.07.2023 at Kampnagel Hamburg
                          <br></br>21.09.2023 - 21.11.2023 at "The Cup Flows
                          Over: Art from the Soul of Iran" at Gallery Bergen,
                          New Jersey
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid md={6} sm={6}>
                      <Typography
                        sx={{
                          ...subHeroText,
                          fontFamily: "Arial",
                          width: { md: "58%", sm: "85%" },
                        }}
                      >
                        Under the Same Sky explores the point of incomplete
                        arrival of a young couple in England. The audio
                        recordings were made during a visit to London in
                        February 2023. The artist had met the speakers two years
                        earlier in Sarajevo, as they traveled from Iran to
                        Europe. The focus is on the protagonists’ current
                        situation, how they see themselves, their expectations
                        and hopes now, looking back on the journey that lies
                        behind them. Guided by the question of what becomes of
                        hope when arriving does not live up to expectations, the
                        project searches for a foothold for the protagonists.
                      </Typography>
                    </Grid>

                    <Grid md={1} sm={1}>
                      <Typography></Typography>
                    </Grid>
                  </Grid>
                </motion.div>
              </motion.div>
              {/* Second Part ENDS HERE   */}
            </Grid>
          </div>

          {/* PROJECT PART STARTS HERE */}
          <Grid
            container
            position="relative"
            display="flex"
            top="2rem"
            // paddingRight='30px'
            justifyContent="space-between"
            sx={{
              flexDirection: { xs: "column", sm: "row", md: "row" },
            }}
          >
            <Grid md={3} sm={4}></Grid>

            {/* INSTALLATION IMAGE PART */}
            <Grid md={6} sm={6} 
            // paddingLeft="20px"
            >
              <Box sx={slideImages}>
                <img
                  class="Installation"
                  src={Installation}
                  alt="Installation"
                />
                <Typography
                  sx={{
                    ...subHeroText,
                    fontFamily: "Arial",
                    textAlign: "end",
                    width: "90%",
                  }}
                >
                  Video and Sound Installation <br></br> Kampnagel Hamburg
                </Typography>

                <Box paddingTop={{ md: "160px" }} textAlign="end">
                  <img
                    class="Installation_02"
                    src={Installation2}
                    alt="Installation"
                  />
                </Box>

                {/* POSTER AUSTELLUNG IMAGE PART */}
                <Grid
                  sx={slideImages}
                  display="flex"
                  flexBasis={{ md: "row", xs: "column", sm: "column" }}
                  marginTop="220px"
                >
                  <img
                    class="PosterAustellung"
                    src={PosterAustellung}
                    alt="PosterAustellung"
                  />
                  <Box
                    marginLeft={{ md: "0.5rem" }}
                    alignSelf={{ md: "flex-end" }}
                  >
                    <Typography sx={{ ...subHeroText, fontFamily: "Arial" }}>
                      Transcripts of an endless journey, Poster
                    </Typography>
                  </Box>
                </Grid>
              </Box>

              {/* GIF STARTS HERE */}
              <Box sx={slideImages} marginTop={{ md: "360px", xs: "10px" }}>
                <video className={` ${classes.gif}`} autoPlay loop muted>
                  <source src={gifPath} type="video/mp4" />
                </video>
              </Box>

              {/* BOOK IMAGES OF GIF PART */}
              <Grid
                sx={slideImages}
                display="flex"
                marginTop={{ md: "200px" }}
                width="100%"
                justifyContent="space-between"
                gap={{ xs: "10px", md: "2rem" }}
              >
                <Box alignSelf="flex-end">
                  <img className="OpenBook" src={OpenBook} alt="Open Book" />
                </Box>

                <Box
                  display="flex"
                  flexDirection={{ md: "column" }}
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      ...subHeroText,
                      fontFamily: "Arial",
                    }}
                  >
                    Transcripts of an endless journey <br></br>Booklet with 96
                    pages <br></br>105mm x 145mm
                  </Typography>
                  <Box
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    alignContent="flex-end"
                    alignSelf="flex-end"
                  >
                    <img class="Cover" src={BookCover} alt="Installation" />
                  </Box>
                </Box>
              </Grid>
              <Box width="auto" height="30%"></Box>
            </Grid>

            <Grid md={1} sm={1}></Grid>
          </Grid>
          {/* PROJECT PART ENDS HERE */}
        </div>
      )}
    </>
  );
}
