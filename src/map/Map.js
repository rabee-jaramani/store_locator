import React from 'react';
export default function Map() {
  return (
    <div className="map-container">
      <iframe
        className="map-iframe"
        title="Saudi Arabia"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7455039.655145476!2d40.580647886855935!3d24.16625830320905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sae!4v1649743148483!5m2!1sen!2sae"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
