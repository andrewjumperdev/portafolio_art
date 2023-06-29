import React from "react";

const images = [
  "./assets/_MG_4989.jpg",
  "./assets/IMG_5107.jpg",
  "./assets/_MG_5053.JPG",
  "./assets/_MG_5483.JPG",
  "./assets/DUTZ8385.JPG",
  "./assets/DUTZE8385.JPG",
  "./assets/IM3A7762.jpg",
  "./assets/IM3A7780.jpg",
  "./assets/IM3A7785.jpg",
  "./assets/IM3A9249.jpg",
  "./assets/IM3A9258.jpg",
  "./assets/IM3A9287.jpg",
  "./assets/IM3A9348.jpg",
  "./assets/IM3A9358.jpg",
  "./assets/IMG_3689.JPG",
  "./assets/Me running.jpg",
];

const GridImages = () => {
  return (
    <div className="main__container">
      <div className="row">
        <div className="gallery">
          {images.map(images => <img className="gallery_img" src={images} alt="Motion Images" />)}
        </div>
      </div>
    </div>
  );
};

export default GridImages;
