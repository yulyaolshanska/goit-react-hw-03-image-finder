import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImage } from '../services/ApiServices';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    searchImg: '',
    page: 1,
    resolve: [],
    totalImages: null,
    loading: false,
    showLoadMore: false,
    showModal: false,
    bigImg: '',
    imgAlt: '',
  };

  formData = data => {
    this.setState({
      searchImg: data,
      page: 1,
    });
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getBigImageAndAlt = (img, alt) => {
    this.setState({ bigImg: img, imgAlt: alt });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: !prevState.loading,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchImg, page } = this.state;
    // console.log(prevState.searchImg);
    // console.log(this.state.searchImg);

    if (
      prevState.searchImg !== this.state.searchImg ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const resolve = await fetchImage(searchImg, page);
        const resolveArr = resolve.data.hits;
        // console.log(resolveArr);

        if (resolveArr.length === 0) {
          Notify.warning(
            ' Sorry, there are no images matching your search query. Please try again.'
          );
          this.setState({ loading: false, resolve: [] });
        } else {
          console.log(resolve);

          this.setState(prevState => ({
            resolve: [...prevState.resolve, ...resolveArr],
            loading: false,
            showLoadMore: true,
            totalImages: resolve.data.totalHits,
            // bigImg: largeImages,
          }));
        }
        // const largeImages = resolveArr.map(image => image.largeImageURL);

        // if (prevState.searchImg === this.state.searchImg) {
        //   Notify.warning('You enter the same');
        // }
        // console.log(this.state);
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    const {
      resolve,
      loading,
      showModal,
      bigImg,
      imgAlt,
      showLoadMore,
      totalImages,
    } = this.state;
    // const bigImg = resolve.largeImageURL;
    console.log(resolve.length);
    console.log(totalImages);

    return (
      <>
        <Searchbar onSubmit={this.formData} />
        {loading && <Loader />}
        <ImageGallery
          getBigImageAndAlt={this.getBigImageAndAlt}
          modalOpen={this.toggleModal}
          images={resolve}
        ></ImageGallery>
        {resolve.length >= 12 && resolve.length !== totalImages && (
          <Button onClick={this.onLoadMore} />
        )}
        {resolve.length === totalImages && (
          <Notification>no more images !</Notification>
        )}

        {showModal && (
          <Modal
            closeModal={this.toggleModal}
            imgSrc={bigImg}
            imgAlt={imgAlt}
          />
        )}
      </>
    );
  }
}
