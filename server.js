const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "./build")));

// Anything that doesn't match the above, send back the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./build/index.html"));
});

app.listen(port, () =>
  console.log(`Successfully started server on port: ${port}`)
);
