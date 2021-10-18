import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonDetailsPage from "../pages/PokemonDetailsPage";
import Home from "../pages/Home";
import PokedexList from "../pages/PokedexList";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/pokedex/list">
            <PokedexList/>
        </Route>
        <Route exact path="/pokemon/details">
            <PokemonDetailsPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
