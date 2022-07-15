import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImage } from '../services/ApiServices';

export class App extends Component {
  state = {
    searchImg: '',
    page: 1,
    resolve: [],
  };

  formData = data => {
    this.setState({
      searchImg: data,
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchImg, page } = this.state;
    if (prevState.searchImg !== this.state.searchImg) {
      const resolve = await fetchImage(searchImg, page);
      this.setState({ resolve: resolve.data.hits });
    }
  }

  render() {
    const { resolve } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formData} />
        <ImageGallery images={resolve} />
      </div>
    );
  }
}
