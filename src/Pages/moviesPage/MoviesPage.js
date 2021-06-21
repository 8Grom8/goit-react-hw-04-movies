import React, { Component } from "react";
import FilmsList from "../../components/FilmList/FilmsList";
import SearchForm from "../../components/SearchForm/SearchForm";
import ApiMovies from "../../API/moviesApi";
import Section from "../../components/Section/Section";

class MoviesPage extends Component {
  state = { searchQuery: "", films: [] };

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.FilmsWidthQuery();
    }
  }

  FilmsWidthQuery = async () => {
    const { searchQuery } = this.state;
    if (!searchQuery) {
      return;
    }
    const { results } = await ApiMovies.SearchMovies({ searchQuery });
    this.setState({ films: [...results] });
  };

  changeQuery = (query) => {
    this.setState({
      searchQuery: query,
      films: [],
    });
  };
  render() {
    const { films } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.changeQuery} />
        {films.length !== 0 && (
          <Section title="Found according to your request">
            <FilmsList films={films} />
          </Section>
        )}
      </div>
    );
  }
}

export default MoviesPage;
