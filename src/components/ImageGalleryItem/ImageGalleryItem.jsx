import { GalleryItem, GalleryImage } from './imageGalleryItem.styled';
// import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({
  imgSrc,
  imgAlt,
  modalOpen,
  bigImg,
  getBigImageAndAlt,
  id,
}) => {
  //   getBigImage(bigImg);
  return (
    <GalleryItem
      id={id}
      onClick={() => {
        getBigImageAndAlt(bigImg, imgAlt);
        modalOpen();
      }}
    >
      <GalleryImage src={imgSrc} alt={imgAlt} />
    </GalleryItem>
  );
};
