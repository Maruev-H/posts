import React from "react";
import './Card.scss'

const Card = ({title, text, img, img_2x, tags, autor, date, views}) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} srcSet={img_2x} alt="" />
      </div>
      <p className="card__tag">{tags}</p>
      <h1 className="card__name">{title}</h1>
      <div className="card__other">
        <ul className="card__created-at">
          <p className="card__author">{autor}</p>
          <li>{date}</li>
          <li>{views} Views</li>
        </ul>
      </div>
      <span className="card__description">
        {text}
      </span>
    </div>
  );
};

export default Card;
