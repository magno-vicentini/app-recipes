import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../../images/drinkIcon.svg';
import exploreIcon from '../../../images/exploreIcon.svg';
import mealIcon from '../../../images/mealIcon.svg';
import './style.css';

function Footer() {
  return (
    <nav
      className="footer-content"
      data-testid="footer"
    >
      <Link
        to="/bebidas"
        className="drinks-button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
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
        src={ exploreIcon }
      >
        <img
          src={ exploreIcon }
          alt="explore icon"
        />
      </Link>
      <Link
        to="/comidas"
        className="food-button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
      >
        <img
          src={ mealIcon }
          alt="meal icon"
        />
      </Link>
    </nav>
  );
}

export default Footer;
