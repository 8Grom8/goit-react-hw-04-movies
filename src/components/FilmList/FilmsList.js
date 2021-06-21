import React from "react";
import { Link, withRouter } from "react-router-dom";
import defaultImg from "../../images/backdrop-249158_1920.jpg";
import css from "./FilmsList.module.css";
import PropTypes from "prop-types";

const FilmsList = ({ films, location }) => {
  return (
    <div className={css.filmsContainer}>
      <ul className={css.list}>
        {films.map(({ title, id, poster_path }) => (
          <li key={id} className={css.item}>
            <div className={css.wrapper}>
              <Link
                to={{ pathname: `/movies/${id}`, state: { from: location } }}
                className={css.link}
              >
                <img
                  className={css.img}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                      : defaultImg
                  }
                  alt={title}
                />
                <p className={css.text}>{title}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(FilmsList);
