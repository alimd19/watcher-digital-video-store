import { Box, Button, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

import logo from "../logo.png";

const Footer = () => {
  return (
    <Box
      component="div"
      sx={{ backgroundColor: "primary.main", display: "flex" }}
    >
      <Grid container>
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <img src={logo} alt="logo" style={{ width: "50px" }} />
          <Typography variant="h6" component="span" sx={{ px: 1 }} color="white">
            Watcher
          </Typography>
        </Grid>
        <Grid container item justifyContent="center">
          <Button sx={{ color: "white" }}>About Us</Button>
          <Button sx={{ color: "white" }}>Contact Us</Button>
          <Button sx={{ color: "white" }}>Policies</Button>
        </Grid>
        <Grid container item justifyContent="center" >
          <FacebookIcon sx={{ color: "white" }} />
          <InstagramIcon sx={{ color: "white" }} />
          <TwitterIcon sx={{ color: "white" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
