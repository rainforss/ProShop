import React from "react";
import PropTypes from "prop-types";

export const Rating = ({ value, text, color = "danger" }) => {
  const stars = [];
  for (var i = 0; i < 5; i++) {
    if (value - i >= 1) {
      stars.push(<i className={`fas fa-star text-${color}`}></i>);
    } else if (value - i > 0 && value - i < 1) {
      stars.push(<i className={`fas fa-star-half-alt text-${color}`}></i>);
    } else {
      stars.push(<i className={`far fa-star text-${color}`}></i>);
    }
  }
  return (
    <div className="rating">
      {stars.map((star) => (
        <span>{star}</span>
      ))}
      <span>{text && text}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
