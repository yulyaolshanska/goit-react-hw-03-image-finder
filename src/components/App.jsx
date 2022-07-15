import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {};

  formData = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formData} />
      </div>
    );
  }
}
