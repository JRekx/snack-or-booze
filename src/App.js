/**
 * App component that renders different pages/components based on route.
 * Uses react-router-dom for routing.
 * Fetches snacks and drinks data on mount and passes to components.
 * Shows loading state until data is fetched.
 * Routes:
 * - Home page
 * - Snack menu
 * - Drink menu
 * - Snack item detail
 * - Drink item detail
 * - 404 catch-all
 */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Drinks from "./Drinks";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
    }

    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
    }

    getSnacks();
    getDrinks();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={snacks} itemType="snacks" cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem items={drinks} itemType="drinks" cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
