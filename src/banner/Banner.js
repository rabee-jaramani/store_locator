import React from 'react';
import bannerImg from './bannerImage.png';

export default function Banner() {
  return (
    <div className="banner-container flex-centering">
      <img src={bannerImg} alt="Berkinstock-img" />
    </div>
  );
}
