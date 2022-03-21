import { Button } from '@material-ui/core';
import React from 'react';

export default function Card(props) {
  const card = props.card;
  return (
    <div className="card-container">
      <div className="corner"></div>
      <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-city"></i>
        </span>
        <span className="title">City: </span>
        <span className="content">{card.city}</span>
      </div>

      <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-map-location-dot"></i>
        </span>
        <span className="title">Location: </span>
        <span className="content">{card.location}</span>
      </div>
      {card.store_no === 'n/a' ? (
        <div className="card-row">
          <span className="icon">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="title">Store Manager no: </span>
          <span className="content">
            <a href={`tel:${card.store_manager_no}`}>{card.store_manager_no}</a>
          </span>
        </div>
      ) : (
        <div className="card-row">
          <span className="icon">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="title">Store no: </span>
          <span className="content">{card.store_no}</span>
        </div>
      )}

      <div className="card-row">
        <Button
          fullWidth
          variant="contained"
          onClick={() => window.open(card.google_map_link)}
        >
          <i className="fa-solid fa-diamond-turn-right"></i>Directions
        </Button>
      </div>
    </div>
  );
}
