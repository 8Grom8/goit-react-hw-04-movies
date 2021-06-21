import React, { Component } from "react";
import css from "./SearchForm.module.css";
import PropTypes from "prop-types";
class SearchForm extends Component {
  state = { query: "" };

  handleChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    const { query } = this.state;

    event.preventDefault();
    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    return (
      <div className={css.Search}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={this.handleChange}
          />

          <button type="submit" className={css.SearchButton}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
