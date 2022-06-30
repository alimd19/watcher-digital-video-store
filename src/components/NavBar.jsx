import { AppBar, Button, Toolbar, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

import logo from "../logo.png";

const NavBar = ({ showModal }) => {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid
            item
            container
            xs={4}
            md={3}
            alignItems="center"
            onClick={() => navigate("/")}
          >
            <Grid item>
              <img src={logo} alt="logo" style={{ width: "50px" }} />
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span" sx={{ px: 1 }}>
                Watcher
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent="center" xs={4} md={6}>
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={() => navigate("/movies")}
            >
              Movies
            </Button>
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={() => navigate("/shows")}
            >
              Shows
            </Button>
          </Grid>
          <Grid
            item
            container
            xs={4}
            md={3}
            direction="row"
            justifyContent="end"
          >
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={() => showModal("signup")}
            >
              Signup
            </Button>
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={() => showModal("login")}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
