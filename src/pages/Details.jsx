import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";

const Details = () => {
  const { type, id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:${process.env.PORT || 8000}/${type}?id=${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data[0]))
      .catch((err) => console.log(err));
  }, [type, id]);

  return (
    <Grid container sx={{ p: 4 }} spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia component="img" image={item.image} />
        </Card>
      </Grid>
      <Grid container item md={6} alignItems="center" direction="column">
        <Typography variant="h3">{item.title}</Typography>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          <Grid item container direction="column" xs={6} alignItems="end">
            <Typography variant="p">IMDB Rank:</Typography>
            <Typography variant="p">Full Name:</Typography>
            <Typography variant="p">Year:</Typography>
            <Typography variant="p">IMDB Rating:</Typography>
            <Typography variant="p">Description:</Typography>
          </Grid>
          <Grid item container direction="column" xs={6}>
            <Typography variant="p">#{item.rank}</Typography>
            <Typography variant="p">{item.fullTitle}</Typography>
            <Typography variant="p">{item.year}</Typography>
            <Typography variant="p">{item.imDbRating}</Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse molestie, massa porta aliquet dignissim, dui velit
              vestibulum felis, nec sollicitudin tortor urna in lectus.
              Curabitur eu leo ac mi tempus vulputate. Ut at neque leo.
              Curabitur et venenatis nisi. Vivamus posuere nibh non lectus
              hendrerit, id efficitur dui vulputate. Vivamus semper urna nec
              laoreet auctor. In varius dolor accumsan massa sollicitudin, sed
              pulvinar tortor hendrerit. Mauris consequat vel lacus quis mollis.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" sx={{ m: 3 }}>
            Buy $19.99
          </Button>
          <Button variant="contained" sx={{ m: 3 }}>
            Rent $4.99
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Details;
