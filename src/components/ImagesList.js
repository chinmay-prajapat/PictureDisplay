import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // return props.images.map(({ description, id, urls }) => {
  //   return <img key={id} src={urls.regular} alt={description} />;
  // });
  const img = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{img}</div>;
};
export default ImageList;
