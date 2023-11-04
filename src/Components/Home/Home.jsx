import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Homemain from "../../Assets/homemain.avif";
import Footer from "../Footer/Footer";

const styles = {
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "86vh",
    opacity: "0.6",
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backgroundImage: `url(${Homemain})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
};

const Home = () => {
  return (
    <>
      <Box sx={styles.boxContainer}>
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h2"
                  fontWeight={700}
                  sx={{
                    color: "#ff0000",
                    "@media (max-width: 550px)": {
                      fontSize: "3rem",
                    },
                    "@media (max-width: 400px)": {
                      fontSize: "2.5rem",
                    },
                    "@media (max-width: 350px)": {
                      fontSize: "1.8rem",
                    },
                  }}
                >
                  DEVELOPER'S
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  [Portfolio]
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
