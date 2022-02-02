import React from "react"
import { ImageGalleryItemLi, ImageGalleryItemImg } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";

const ImageGalleryItem = ({id, largeUrl, toggleMod, srcSmall, srcLarge}) => {
  return (
    <ImageGalleryItemLi id={id}>
       <ImageGalleryItemImg 
       onClick={() => {
        toggleMod();
        largeUrl(srcLarge);
        }}
       src={srcSmall} 
       alt='' />
    </ImageGalleryItemLi>
  );
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  largeUrl: PropTypes.func.isRequired,
  toggleMod: PropTypes.func.isRequired,
  srcSmall: PropTypes.string.isRequired,
  srcLarge: PropTypes.string.isRequired


}
export default ImageGalleryItem

