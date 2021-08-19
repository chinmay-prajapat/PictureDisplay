import React from "react";
const ImageList = (props) => {
  return props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  //   const img = props.images.map(({ description, id, urls }) => {
  //     return <img key={id} src={urls.regular} alt={description} />;
  //   });

  //   return <div className="ui container">{img}</div>;
};
export default ImageList;
