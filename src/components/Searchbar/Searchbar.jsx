import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;
    if (query) {
      onSubmit(query);
      this.setState({
        query: '',
      });
    } else {
      Notify.warning("You didn't enter anything to search");
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
            name="query"
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
