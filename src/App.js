import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Details from "./pages/Details.jsx";
import Home from "./pages/Home.jsx";
import Titles from "./pages/Titles.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Titles type="Movies" />} />
          <Route path="/shows" element={<Titles type="Shows" />} />
          <Route path="/:type/details/:id" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
