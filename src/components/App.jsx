import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImage } from '../services/ApiServices';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    searchImg: '',
    page: 1,
    resolve: [],
    loading: false,
    showModal: false,
    bigImg: '',
  };

  formData = data => {
    this.setState({
      searchImg: data,
      page: 1,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getBigImage = img => {
    this.setState({ bigImg: img });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchImg, page } = this.state;
    if (prevState.searchImg !== this.state.searchImg) {
      try {
        this.setState({ loading: true });
        const resolve = await fetchImage(searchImg, page);
        const resolveArr = resolve.data.hits;
        // const largeImages = resolveArr.map(image => image.largeImageURL);
        this.setState({
          resolve: resolveArr,
          loading: false,
          // bigImg: largeImages,
        });
        // console.log(this.state);
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    const { resolve, loading, showModal, bigImg } = this.state;
    // const bigImg = resolve.largeImageURL;
    // console.log(bigImg);

    return (
      <div>
        <Searchbar onSubmit={this.formData} />
        {loading && <Loader />}
        <ImageGallery
          getBigImage={this.getBigImage}
          modalOpen={this.toggleModal}
          images={resolve}
        />
        {showModal && <Modal imgSrc={bigImg} />}
      </div>
    );
  }
}
