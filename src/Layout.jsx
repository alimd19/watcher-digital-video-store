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
import { useLogin } from "./hooks/useLogin";
import { useSignup } from "./hooks/useSignup";

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
  const [error, setError] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [signupDetails, setSignupDetails] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { login, loginIsLoading, loginError } = useLogin();
  const { signup, signupIsLoading, signupError } = useSignup();

  const handleChange = (e, action) => {
    const { name, value } = e.target;

    switch (action) {
      case "signup":
        setSignupDetails((prev) => ({ ...prev, [name]: value }));
        break;
      default:
        setLoginDetails((prev) => ({ ...prev, [name]: value }));
        break;
    }
  };

  const handleSubmit = async (type) => {
    switch (type) {
      case "signup":
        if (signupDetails.password1 === signupDetails.password2) {
          const user = {
            fname: signupDetails.fname,
            lname: signupDetails.lname,
            email: signupDetails.email,
            password: signupDetails.password1,
            username: signupDetails.username,
          };

          await signup(user);

          setSignupDetails({
            fname: "",
            lname: "",
            username: "",
            email: "",
            password1: "",
            password2: "",
          });

          if (!signupError && !signupIsLoading) {
            handleClose("signup");
          }
        } else {
          setError("Passwords do not match");
        }

        break;

      default:
        await login(loginDetails);

        setLoginDetails({
          username: "",
          password: "",
        });

        if (!loginError && !loginIsLoading){
          handleClose("login");
        }
        break;
    }
  };

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
            id="username"
            name="username"
            label="Username"
            variant="filled"
            sx={{ py: 2 }}
            onChange={(e) => handleChange(e, "login")}
          />
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            variant="filled"
            type="password"
            sx={{ py: 2 }}
            onChange={(e) => handleChange(e, "login")}
          />
          <Button
            variant="contained"
            sx={{ py: 2 }}
            onClick={(e) => handleSubmit("login")}
          >
            Login
          </Button>

          {loginError && <div>{loginError}</div>}
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
            id="fname"
            name="fname"
            label="First Name"
            placeholder="Enter your First Name"
            variant="filled"
            sx={{ py: 2 }}
            onChange={(e) => handleChange(e, "signup")}
          />
          <TextField
            required
            id="lname"
            name="lname"
            label="Last Name"
            placeholder="Enter your Last Name"
            variant="filled"
            sx={{ py: 2 }}
            onChange={(e) => handleChange(e, "signup")}
          />
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your Email"
            variant="filled"
            sx={{ py: 2 }}
            onChange={(e) => handleChange(e, "signup")}
          />
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            placeholder="Choose a username"
            variant="filled"
            sx={{ py: 2 }}
            onChange={(e) => handleChange(e, "signup")}
          />
          <TextField
            required
            id="password1"
            name="password1"
            label="Password"
            placeholder="Make sure to use a strong password"
            variant="filled"
            type="password"
            sx={{ py: 2 }}
            onChange={(e) => handleChange(e, "signup")}
          />
          <TextField
            required
            id="password2"
            name="password2"
            label="Repeat Password"
            placeholder="Confirm Password"
            variant="filled"
            type="password"
            sx={{ py: 2 }}
            onChange={(e) => handleChange(e, "signup")}
          />
          <Button
            variant="contained"
            sx={{ py: 2 }}
            onClick={(e) => handleSubmit("signup")}
          >
            Signup
          </Button>
          {(signupError || error) && <div>{signupError || error}</div>}
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
