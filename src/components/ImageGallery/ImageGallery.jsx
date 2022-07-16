import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './imageGallery.styled';
// import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({ images, modalOpen, getBigImageAndAlt }) => {
  return (
    <ImageGalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            modalOpen={modalOpen}
            key={image.id}
            id={image.id}
            imgSrc={image.webformatURL}
            imgAlt={image.tags}
            bigImg={image.largeImageURL}
            getBigImageAndAlt={getBigImageAndAlt}
          />
        );
      })}
    </ImageGalleryList>
  );
};

// imgSrc={largeImageURL}
