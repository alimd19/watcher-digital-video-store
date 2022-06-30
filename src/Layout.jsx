import {
  Box,
  Button,
  CssBaseline,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyContent: "center",
  flexDirection: "column",
};

const Layout = ({ children }) => {
  const [open, setOpen] = useState({ login: false, signup: false });
  const handleOpen = (formName) =>
    setOpen((prev) => ({ ...prev, [formName]: true }));
  const handleClose = (formName) =>
    setOpen((prev) => ({ ...prev, [formName]: false }));

  return (
    <Box component="div">
      <CssBaseline />
      <Modal
        open={open.login}
        onClose={() => handleClose("login")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" display="flex">
          <Typography variant="h4">Login</Typography>
          <TextField
            required
            id="filled-required"
            label="Username"
            variant="filled"
            sx={{ py: 2 }}
          />
          <TextField
            required
            id="filled-password-required"
            label="Password"
            variant="filled"
            type="password"
            sx={{ py: 2 }}
          />
          <Button variant="contained" sx={{ py: 2 }}>
            Login
          </Button>
        </Box>
      </Modal>
      <Modal
        open={open.signup}
        onClose={() => handleClose("signup")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" display="flex">
          <Typography variant="h4">Signup</Typography>
          <TextField
            required
            id="email"
            label="Email"
            placeholder="Enter your Email"
            variant="filled"
            sx={{ py: 2 }}
          />
          <TextField
            required
            id="username"
            label="Username"
            placeholder="Choose a username"
            variant="filled"
            sx={{ py: 2 }}
          />
          <TextField
            required
            id="password1"
            label="Password"
            placeholder="Make sure to use a strong password"
            variant="filled"
            type="password"
            sx={{ py: 2 }}
          />
          <TextField
            required
            id="password2"
            label="Repeat Password"
            placeholder="Confirm Password"
            variant="filled"
            type="password"
            sx={{ py: 2 }}
          />
          <Button variant="contained" sx={{ py: 2 }}>
            Signup
          </Button>
        </Box>
      </Modal>
      <NavBar showModal={handleOpen} />
      <Box component="div" sx={(theme) => ({ ...theme.mixins.toolbar })}></Box>
      <Box component="div">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
