import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './imageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            imgSrc={image.webformatURL}
            imgAlt={image.tags}
          />
        );
      })}
    </ImageGalleryList>
  );
};

// imgSrc={largeImageURL}
