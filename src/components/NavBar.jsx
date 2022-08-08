import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

import logo from "../logo.png";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useLogout } from "../hooks/useLogout";

const NavBar = ({ showModal }) => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const { logout } = useLogout();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    logout();
    setAnchorEl(null);
  };

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
            {user.username ? (
              <>
                <Typography
                  onClick={handleClick}
                  variant="h6"
                  component="span"
                  sx={{ px: 1 }}
                >
                  {user.username}
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
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
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
