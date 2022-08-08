import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/video/${id}`)
      .then((res) => setItem(res.data.body[0]));
  }, [id]);

  return (
    <Grid container sx={{ p: 4 }} spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia component="img" image={item.bigPoster} />
        </Card>
      </Grid>
      <Grid container item md={6} alignItems="center" direction="column">
        <Typography variant="h3">{item.name}</Typography>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          <Grid item container direction="column" xs={6} alignItems="end">
            <Typography variant="p">Synopsis:</Typography>
          </Grid>
          <Grid item container direction="column" xs={6}>
            <Typography variant="p">{item.synopsis}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" sx={{ m: 3 }}>
            Buy ${item.price}
          </Button>
          <Button variant="contained" sx={{ m: 3 }}>
            Rent ${item.rent}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Details;
