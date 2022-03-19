import { Button } from '@material-ui/core';
import React from 'react';

export default function Card(props) {
  const card = props.card;
  return (
    <div className="card-container">
      {/* <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-earth-asia"></i>
        </span>
        <span className="title">Country: </span>
        <span className="content">{card.country}</span>
      </div> */}
      {/* <hr /> */}
      <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-city"></i>
        </span>
        <span className="title">City: </span>
        <span className="content">{card.city}</span>
      </div>
      {/* <hr /> */}
      {/* <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-key"></i>
        </span>
        <span className="title">Loc Key: </span>
        <span className="content">{card.loc_key}</span>
      </div> */}
      {/* <hr /> */}
      <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-map-location-dot"></i>
        </span>
        <span className="title">Location: </span>
        <span className="content">{card.location}</span>
      </div>
      {/* <hr /> */}
      {/* <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-bookmark"></i>
        </span>
        <span className="title">Grade: </span>
        <span className="content">{card.grade}</span>
      </div> */}
      {/* <hr /> */}
      {/* <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-user-tie"></i>
        </span>
        <span className="title">Area Manager: </span>
        <span className="content">{card.area_manager}</span>
      </div> */}
      {/* <hr /> */}
      {/* <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-phone"></i>
        </span>
        <span className="title">AM Contact no: </span>
        <span className="content">{card.area_manager_no}</span>
      </div> */}
      {/* <hr /> */}
      <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-phone"></i>
        </span>
        <span className="title">Store no: </span>
        <span className="content">{card.store_no}</span>
      </div>
      {/* <hr /> */}
      {/* <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-phone"></i>
        </span>
        <span className="title">Store Manager: </span>
        <span className="content">{card.store_manager}</span>
      </div> */}
      {/* <hr /> */}
      <div className="card-row">
        <span className="icon">
          <i className="fa-solid fa-phone"></i>
        </span>
        <span className="title">Store Manager no: </span>
        <span className="content">
          <a href={`tel:${card.store_manager_no}`}>{card.store_manager_no}</a>
        </span>
      </div>
      {/* <hr /> */}
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
