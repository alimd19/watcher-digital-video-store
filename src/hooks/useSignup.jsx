import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export const useSignup = () => {
  const [signupError, setSignupError] = useState(null);
  const [signupIsLoading, setSignupIsLoading] = useState(null);
  const { dispatch } = useContext(UserContext);

  const signup = async (user) => {
    setSignupIsLoading(true);
    setSignupError(null);

    axios
      .post("https://watcher-dvs-backend.herokuapp.com/auth/signup", user)
      .then((res) => {
        const user = res.data.body[0];
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({ type: "LOGIN", payload: user });

        setSignupIsLoading(false);
      })
      .catch((err) => {
        setSignupIsLoading(false);
        setSignupError(err.response.data.message);
      });
  };
  return { signup, signupIsLoading, signupError };
};
