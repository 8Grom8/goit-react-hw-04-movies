import React, { Component } from "react";
import ApiMovies from "../../API/moviesApi";
import css from "./Reviews.module.css";

class Reviews extends Component {
  state = { reviews: [] };
  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const response = await ApiMovies.Reviews(movieId);
    this.setState({ reviews: response.results });
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4 className={css.title}> Author: {author}</h4>
              <p className={css.text}>{content}</p>
            </li>
          ))}
        </ul>
        {!reviews.length ? (
          <h3 className="ErrorMessage">
            We don`t have any reviews for this movie
          </h3>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Reviews;
