import './index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ main }) => (

  <div className="productCard__container">
    <div className="productCard__imageWrapper">
      <img className="productCard__image" src={main.image} alt={main.title} />
    </div>
    <div className="ProductCard__Text">
      <span><b>{main.title}</b></span>
    </div>
    <Link className="product-link" to={`/products/${main.id}`}>
      <div className="ProductCard__button">
        <button type="submit" className="productCard__button"> Go To Detail </button>
      </div>
    </Link>
  </div>
);

ProductCard.propTypes = {
  main: PropTypes.shape(),
};

ProductCard.defaultProps = {
  main: {},
};

export default ProductCard;
