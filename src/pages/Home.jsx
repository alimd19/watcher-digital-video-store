import { Divider } from "@mui/material";
import React from "react";
import PosterDisplay from "../components/PosterDisplay";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero arrows={true} />
      <PosterDisplay type="Movies" limit={6} />
      <Divider sx={{ mt: 3 }} />
      <PosterDisplay type="Shows" limit={6} />
      <Divider sx={{ my: 2 }} />
      <Hero />
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default Home;
