import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export const useLogin = () => {
  const [loginError, setLoginError] = useState(null);
  const [loginIsLoading, setLoginIsLoading] = useState(null);
  const { dispatch } = useContext(UserContext);

  const login = async (user) => {
    setLoginIsLoading(true);
    setLoginError(null);

    axios
      .post("https://watcher-dvs-backend.herokuapp.com/auth/login", new URLSearchParams(user), {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        const user = { username: res.data.username };
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({ type: "LOGIN", payload: user });

        setLoginIsLoading(false);
      })
      .catch((err) => {
        setLoginIsLoading(false);
        setLoginError("Invalid Credentials");
      });
  };

  return { login, loginIsLoading, loginError };
};
