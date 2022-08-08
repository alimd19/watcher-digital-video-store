import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Details from "./pages/Details.jsx";
import Home from "./pages/Home.jsx";
import Titles from "./pages/Titles.jsx";
import UserProvider from "./contexts/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Titles type="movie" />} />
            <Route path="/shows" element={<Titles type="show" />} />
            <Route path="/:type/details/:id" element={<Details />} />
          </Routes>
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
