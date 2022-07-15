import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './imageGallery.styled';
// import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({ images, modalOpen, getBigImage }) => {
  return (
    <ImageGalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            modalOpen={modalOpen}
            key={image.id}
            imgSrc={image.webformatURL}
            imgAlt={image.tags}
            bigImg={image.largeImageURL}
            getBigImage={getBigImage}
          />
        );
      })}
    </ImageGalleryList>
  );
};

// imgSrc={largeImageURL}
