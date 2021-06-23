import React, { Component , Suspense } from "react";
import ApiMovies from "../../API/moviesApi";
import { Route, NavLink, Switch } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import defaultImg from "../../images/backdrop-249158_1920.jpg";
import css from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    genres: [],
    from: "/",
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    const response = await ApiMovies.MovieDetails(movieId);
    this.setState({
      movie: response,
      genres: [...response.genres],
      from: this.props.location.state ? this.props.location.state.from : "/",
    });
  }

  getYear = (data) => String(data).slice(0, 4);

  getPercent = (vote) => vote * 10;

  handleGoBack = () => {
    const {  history } = this.props;
    history.push(this.state.from || "/");
  };

  render() {
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      overview,
    } = this.state.movie;

      const { genres } = this.state;
      // const { Image_URL } = "https://image.tmdb.org";
    return (
      <div className={css.cardWrapper}>
        <button
          type="button"
          onClick={this.handleGoBack}
          className={css.btnGoBack}
        >
          Go back
        </button>
        <div className={css.imgBox}>
          <div className={css.cardImg}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                  : defaultImg
              }
              alt={original_title}
              className={css.img}
            />
          </div>

          <div className="card">
            <h2 className={css.cardTitle}>
              {original_title} {this.getYear(release_date)}
            </h2>

            <p className={css.cardText}>
              User Score: {this.getPercent(vote_average)}%{" "}
            </p>

            <h3 className={css.cardSubtitle}>Overview </h3>

            <p className={css.cardText}>{overview}</p>

            <h3 className={css.cardSubtitle}>Genres</h3>

            <ul className={css.list}>
              {genres.map(({ id, name }) => (
                <li key={id} className={css.cardTextList}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={css.informationBox}>
          <h3 className={css.title}>Additional information</h3>

          <ul className={css.list_group}>
            <li className={css.listItem}>
              <NavLink
                to={`${this.props.match.url}/cast`}
                className={css.navLink}
                activeClassName={css.active}
              >
                Cast
              </NavLink>
            </li>
            <li className={css.listItem}>
              <NavLink
                to={`${this.props.match.url}/reviews`}
                className={css.navLink}
                activeClassName={css.active}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route
              exact
              path={`${this.props.match.path}/cast`}
              component={Cast}
            />

            <Route
              exact
              path={`${this.props.match.path}/reviews`}
              component={Reviews}
            />
          </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
