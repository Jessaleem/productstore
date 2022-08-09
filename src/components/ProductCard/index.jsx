import './index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductCard = ({ main }) => {
  const [minutes, setMinutes] = useState(Math.floor(Math.random() * 3));
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 59));
  const [stopbutton, setStopbutton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setStopbutton(true);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="productCard__container">
      <div className="productCard__imageWrapper">
        <img className="productCard__image" src={main.image} alt={main.title} />
      </div>
      <div className="ProductCard__Text">
        <span><b>{main.title}</b></span>
      </div>
      <div className="productCard__bottombox">
        <div className="productCard__timer">
          {timerMinutes}:{timerSeconds}
        </div>
        {
        stopbutton
          ? (
            <div className="ProductCard__button">
              <button disable="true" type="submit" className="productCard__buttond"> Out of Time
              </button>
            </div>
          )
          : (
            <Link className="product-link" to={`/products/${main.id}`}>
              <div className="ProductCard__button">
                <button type="submit" className="productCard__button"> Go To Detail </button>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  main: PropTypes.shape(),
};

ProductCard.defaultProps = {
  main: {},
};

export default ProductCard;
