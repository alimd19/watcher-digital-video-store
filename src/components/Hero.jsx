import { Card, CardMedia } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import axios from "axios";

import "react-slideshow-image/dist/styles.css";

const Hero = ({ arrows }) => {
  const properties = {
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    arrows,
    autoplay: true,
  };

  const [banners, setBanners] = useState([]);

  useState(() => {
    axios
      .get(
        `https://watcher-dvs-backend.herokuapp.com/banners?type=${arrows ? "banner" : "content"}`
      )
      .then((res) => setBanners(res.data.body));
  }, []);

  return (
    <div className="slide-container">
      <Slide {...properties}>
        {banners.map((banner) => (
          <div className="each-slide" key={banner.id}>
            <Card sx={{ width: "100%" }}>
              <CardMedia component="img" alt="image" image={banner.img} />
            </Card>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Hero;
