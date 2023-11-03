import { Box, Container, Grid, Typography} from "@mui/material";
import React from "react";
import Homemain from "../../Assets/homemain.avif";

const styles = {
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    opacity: "0.6",
    overflow: "hidden",
    backgroundImage: `url(${Homemain})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
};

const Home = () => {
  return (
    <Box sx={styles.boxContainer}>
      <Container h-100>
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
              <Typography variant="h2" fontWeight={700} sx={{ color: "green" }}>
                DEVELOPER'S
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                (Portfolio)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
