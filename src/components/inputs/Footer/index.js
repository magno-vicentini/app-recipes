import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../../images/drinkIcon.svg';
import exploreIcon from '../../../images/exploreIcon.svg';
import mealIcon from '../../../images/mealIcon.svg';

function Footer() {
  return (
    <div
      className="footer-content"
      data-testid="footer"
    >
      <Link
        to="/bebidas"
        className="drinks-button"
        data-testid="drinks-bottom-btn"
      >
        <img
          src={ drinkIcon }
          alt="drink icon"
        />
      </Link>
      <Link
        to="/explorar"
        className="explore-button"
        data-testid="explore-bottom-btn"
      >
        <img
          src={ exploreIcon }
          alt="explore icon"
        />
      </Link>
      <Link
        to="/explorar"
        className="food-button"
        data-testid="food-bottom-btn"
      >
        <img
          src={ mealIcon }
          alt="meal icon"
        />
      </Link>
    </div>
  );
}

export default Footer;
