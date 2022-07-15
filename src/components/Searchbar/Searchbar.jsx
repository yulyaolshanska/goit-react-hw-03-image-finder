import { Component } from 'react';
import css from './searchbar.module.css';

export class Searchbar extends Component {
  state = {};

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
