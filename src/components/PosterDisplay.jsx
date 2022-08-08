import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PosterDisplay = ({ type, limit, name }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://watcher-dvs-backend.herokuapp.com/videos?featured=true&type=${type}&name=${name}`)
      .then((res) => setItems(res.data.body.slice(0, limit)));
  }, [type, limit, name]);

  const display = type === "movie" ? "Movies" : "Shows";

  return (
    <Box component="div" sx={{ m: 2 }}>
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        sx={{ my: 2 }}
      >
        {limit ? `Featured ${display}` : `Our Library of ${display}`}
      </Typography>

      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={4} md={2} key={item.id}>
            <Card
              sx={{ maxWidth: 200 }}
              onClick={() => navigate(`/${type}/details/${item.id}`)}
            >
              <CardActionArea>
                <CardMedia component="img" image={item.smallPoster} />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PosterDisplay;
