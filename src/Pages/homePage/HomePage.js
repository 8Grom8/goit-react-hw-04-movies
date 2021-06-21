import React, { Component } from "react";
import ApiMovies from "../../API/moviesApi";
import Button from "../../components/Button/Button";
import FilmsList from "../../components/FilmList/FilmsList";
import Section from "../../components/Section/Section";
class HomePage extends Component {
  state = { films: [], pageNumber: 1 };

  componentDidMount() {
    this.PopularFilms();
  }

  PopularFilms = async () => {
    const { pageNumber } = this.state;
    const { results } = await ApiMovies.PopularMovies({ pageNumber });
    this.setState((prevState) => ({
      films: [...prevState.films, ...results],
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  render() {
    const { films } = this.state;

    return (
      <>
        <Section title="Trending">
          <FilmsList films={films} />
          <Button btnName="Load more" onClick={this.PopularFilms} />
        </Section>
     </>
    );
  }
}

export default HomePage;
