import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Contact from "./pages/contact";
import projects from "./pages/projects";
import BeTheHero from "./pages/projectsPages/BeTheHero";
import AirCnC from "./pages/projectsPages/AirCnC";
import Airbnb from "./pages/projectsPages/Airbnb";
import ProductHunt from "./pages/projectsPages/ProductHunt";
import Academia from "./pages/projectsPages/Academia";
import RsClone from "./pages/projectsPages/RsClone";
import nbClone from "./pages/projectsPages/nbClone";
import templatePage from "./pages/projectsPages/templatePage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/BeTheHero" component={BeTheHero} />
      <Route exact path="/AirCnC" component={AirCnC} />
      <Route exact path="/Airbnb" component={Airbnb} />
      <Route exact path="/projects" component={projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/ProductHunt" component={ProductHunt} />
      <Route exact path="/Academia" component={Academia} />
      <Route exact path="/RsClone" component={RsClone} />
      <Route exact path="/nbClone" component={nbClone} />
      <Route exact path="/templatePage" component={templatePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
