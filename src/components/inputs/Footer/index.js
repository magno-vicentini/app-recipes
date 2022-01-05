import React from 'react';
import drinkIcon from '../../../images/drinkIcon.svg';
import exploreIcon from '../../../images/exploreIcon.svg';
import mealIcon from '../../../images/mealIcon.svg';

function Footer() {
  return (
    <div
      className="footer-content"
      data-testid="footer"
    >
      <div
        className="drinks-button"
        data-testid="drinks-bottom-btn"
      >
        <img
          src={ drinkIcon }
          alt="drink icon"
        />
      </div>
      <div
        className="drinks-button"
        data-testid="drinks-bottom-btn"
      >
        <img
          src={ exploreIcon }
          alt="explore icon"
        />
      </div>
      <div
        className="drinks-button"
        data-testid="drinks-bottom-btn"
      >
        <img
          src={ mealIcon }
          alt="meal icon"
        />
      </div>
    </div>
  );
}

export default Footer;
