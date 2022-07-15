import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {};

  formData = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formData} />
        <ImageGallery />
      </div>
    );
  }
}
