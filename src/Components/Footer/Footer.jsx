import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ position: "sticky", paddingInline: "1rem", bottom: "0", background:'black' }}
      >
        <Grid item md={6} display="flex" alignItems="center">
          <Typography sx={{ color: "white", fontFamily: "cursive" }}>
            Copyright © 2023 Design by Jakhar.
          </Typography>
        </Grid>
        <Grid item md={6} display="flex" justifyContent="flex-end">
          <IconButton sx={{ color: "#fff" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/lalit-kumar-jakhar/" sx={{ color: "#fff" }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://instagram.com/lalit_choudhary25"
            sx={{ color: "#fff" }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <PinterestIcon />
          </IconButton>
          <IconButton
            href="https://github.com/lalitjakhar"
            sx={{ color: "#fff" }}
          >
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
