import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import React from "react";
import Aboutmy from "../../Assets/aboutmy.jpg";
import "../About/About.css";

const About = () => {
  return (
    <>
      <Container
        sx={{ marginBlock: "3.8rem", borderBlock: "2px dashed yellow" }}
      >
        <Box marginBlock={3}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              fontFamily: "fantasy",
              textDecoration: "underline",
            }}
          >
            Know Me More
          </Typography>
        </Box>
        <Grid container sx={{ marginBlock: "2rem" }}>
          <Grid
            item
            md={8}
            sx={{
              order: { xs: 2, md: 1 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "block" }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "700",
                  fontFamily: "Montserrat",
                  letterSpacing: "-0.5px",
                  color: "#6e6d6d",
                  marginTop: "1rem",
                  fontSize: "64px",
                  "@media (max-width: 900px)": {
                    marginTop: "0",
                    fontSize: "49px",
                  },
                  "@media (max-width: 768px)": {
                    fontSize: "42px",
                  },
                  "@media (max-width: 567px)": {
                    fontSize: "38px",
                  },
                }}
              >
                Hello, I am{" "}
                <span style={{ color: "#2e7d32" }}>Lalit Jakhar</span>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#6e6d6d",
                  paddingTop: "1.7rem",
                  fontSize: "18px",
                  fontFamily: "emoji",
                  lineHeight: "180%",
                  "@media (max-width: 900px)": {
                    paddingTop: "1rem",
                  },
                }}
              >
                I'm a designer & developer with a passion for web design. I
                enjoy developing simple, clean and slick websites that provide
                real value to the end user. Thousands of clients have procured
                exceptional results while working with me. Delivering work
                within time and budget which meets client’s requirements is our
                moto.I have serious passion for UI effects and creating
                intuitive, with over a decade of experience.
              </Typography>
              <Typography sx={{ color: "#2e7d32", paddingTop: "2rem" }}>
                Name :- <span style={{ color: "#6e6d6d" }}>Lalit Jakhar</span>
              </Typography>
              <Typography sx={{ color: "#2e7d32", paddingTop: "1rem" }}>
                Age :- <span style={{ color: "#6e6d6d" }}> 18 Years</span>
              </Typography>
              <Typography sx={{ color: "#2e7d32", paddingTop: "1rem" }}>
                Experience :-{" "}
                <span style={{ color: "#6e6d6d" }}> 1+ Year's</span>
              </Typography>
              <Typography sx={{ color: "#2e7d32", paddingTop: "1rem" }}>
                Email :-{" "}
                <span style={{ color: "#6e6d6d" }}>
                  {" "}
                  lalit25jakhar@gmail.com{" "}
                </span>
              </Typography>
              <Typography sx={{ color: "#2e7d32", paddingTop: "1rem" }}>
                From :-{" "}
                <span style={{ color: "#6e6d6d" }}> Jaipur, Rajasthan</span>
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <a href="Aboutmy" download={Aboutmy}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      textTransform: "none",
                      marginTop: "2.8rem",
                      "@media (max-width: 900px)": {
                        marginTop: "0.5rem",
                      },
                    }}
                  >
                    Download Resume
                  </Button>
                </a>
                <Button
                  variant="outlined"
                  color="success"
                  startIcon={<SaveAsIcon />}
                  sx={{
                    textTransform: "none",
                    marginTop: "2.8rem",
                    "@media (max-width: 900px)": {
                      marginTop: "0.5rem",
                    },
                  }}
                >
                  Blog
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={Aboutmy} draggable="false" alt="Me" className="aboutmy_first_img"></img>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
