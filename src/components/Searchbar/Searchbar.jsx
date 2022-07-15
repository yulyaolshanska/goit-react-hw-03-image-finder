import { Component } from 'react';
import css from './searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;
    onSubmit(query);
    this.setState({
      query: '',
    });

    // console.log(this.state);
    // console.log(this.state.query);
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={css.searchbar}>
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          className={css.form}
        >
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            name="search"
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
