import { GalleryItem, GalleryImage } from './imageGalleryItem.styled';
// import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({
  imgSrc,
  imgAlt,
  modalOpen,
  bigImg,
  getBigImage,
}) => {
  //   getBigImage(bigImg);
  return (
    <GalleryItem onClick={modalOpen}>
      <GalleryImage
        src={imgSrc}
        alt={imgAlt}
        onClick={() => getBigImage(bigImg)}
      />
    </GalleryItem>
  );
};
