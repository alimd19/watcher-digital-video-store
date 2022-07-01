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

const PosterDisplay = ({ type, limit }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/${type}`)
      .then((res) => res.json())
      .then((data) => {
        const limitedData = data.slice(0, limit);
        setItems(limitedData);
      })
      .catch((err) => console.log(err));
  }, [type, limit]);

  return (
    <Box component="div" sx={{ m: 2 }}>
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        sx={{ my: 2 }}
      >
        {limit ? `Featured ${type}` : `Our Library of ${type}`}
      </Typography>

      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={4} md={2} key={item.rank}>
            <Card
              sx={{ maxWidth: 200 }}
              onClick={() => navigate(`/${type}/details/${item.id}`)}
            >
              <CardActionArea>
                <CardMedia component="img" image={item.image} />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PosterDisplay;
