import React, { Component } from "react";
import ApiMovies from "../../API/moviesApi";
import defaultImg from "../../images/backdrop-249158_1920.jpg";
import css from "./Cast.module.css";

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const response = await ApiMovies.Cast(movieId);
    this.setState({ actors: response.cast });
  }
  render() {
    const { actors } = this.state;
    return (
      <div>
        <ul className={css.castGallery}>
          {actors.map(({ id, name, character, profile_path }) => (
            <li key={id} className={css.castGalleryItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w92/${profile_path}`
                    : defaultImg
                }
                alt={name}
                className="CastGalleryItem-image"
              />
              <p className={css.text}>{name}</p>
              <p className={css.text}>Character: {character}</p>
            </li>
          ))}
          {!actors.length ? (
            <h3 className={css.error}>
              We don`t have any information about cast for this movie
            </h3>
          ) : (
            <></>
          )}
        </ul>
      </div>
    );
  }
}

export default Cast;
