import React from 'react'
import PropTypes from 'prop-types';
import './cards.css'

function Card({title, imageSource, url, description, technologies}) {
  return (
    <div className="card text-center bg-dark h-100 animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt={title} className="card-img-top"></img>
      </div>
      <div className="card-body">
        <h4 className="card-title text-light">{title}</h4>
        <p className="card-text text-secondary">{description}</p>
      </div>
      <div className="card-footer">
        <p className="card-text text-info">{technologies}</p>
      </div>
      <div className="card-footer">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-secondary rounded-0"
        >
          Go to this website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.string
}

export default Card;
