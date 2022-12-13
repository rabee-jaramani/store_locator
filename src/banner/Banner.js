import React from 'react';
import bannerImg from './banner-image.webp';

export default function Banner() {
  return (
    <div className="banner-container flex-centering">
      <img src={bannerImg} alt="Berkinstock-img" />
    </div>
  );
}
