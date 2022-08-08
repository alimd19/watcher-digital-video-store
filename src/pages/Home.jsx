import { Divider } from "@mui/material";
import React from "react";
import PosterDisplay from "../components/PosterDisplay";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero arrows={true} />
      <PosterDisplay type="movie" limit={6} name=""/>
      <Divider sx={{ mt: 3 }} />
      <PosterDisplay type="show" limit={6} name=""/>
      <Divider sx={{ my: 2 }} />
      <Hero />
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default Home;
