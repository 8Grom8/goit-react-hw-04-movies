import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";

const HomePage = lazy(() =>import("./Pages/homePage/HomePage.js"));
const MovieDetailsPage = lazy(() =>import("./Pages/movieDetailsPage/MovieDetailsPage"));
const MoviesPage = lazy(() =>import("./Pages/moviesPage/MoviesPage.js"));
const NotFoundPage = lazy(() =>import("./Pages/notFoundPage/NotFoundPage"));

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage}></Route>
            <Route exact path={routes.movies} component={MoviesPage}></Route>
            <Route
              path={routes.moviesDetails}
              component={MovieDetailsPage}
            ></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
