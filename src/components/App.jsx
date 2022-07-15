import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImage } from '../services/ApiServices';

export class App extends Component {
  state = {
    searchImg: '',
    page: 1,
    resolve: [],
    loading: false,
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
      try {
        this.setState({ loading: true });
        const resolve = await fetchImage(searchImg, page);
        this.setState({ resolve: resolve.data.hits, loading: false });
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    const { resolve, loading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formData} />
        {loading && <Loader />}
        <ImageGallery images={resolve} />
      </div>
    );
  }
}
