import React from "react";
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Router } from "@reach/router";
import HeroeDetail from "../../pages/HeroeDetail";
import HeroeEdit from "../../pages/HeroeEdit";
import HeroeNew from "../../pages/HeroeNew";
import Heroes from "../../pages/Heroes";
import NotFound from "../../pages/NotFound";
import Layout from "../Layout/Layout";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Heroes path="/"></Heroes>
          <HeroeNew path="/heroe/new"></HeroeNew>
          <HeroeEdit path="/heroe/:heroeId/edit"></HeroeEdit>
          <HeroeDetail path="/heroe/:heroeId/detail"></HeroeDetail>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
