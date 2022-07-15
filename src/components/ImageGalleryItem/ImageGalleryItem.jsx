import { GalleryItem, GalleryImage } from './imageGalleryItem.styled';

export const ImageGalleryItem = ({imgSrc, imgAlt}) => {
  return (
    <GalleryItem>
      <GalleryImage src={imgSrc} alt={imgAlt} />
    </GalleryItem>
  );
};
