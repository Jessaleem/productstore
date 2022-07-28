import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

const MainPage = ({ product }) => (

  <div className="mainpage__container">
    {
      product.map((item) => (
        <ProductCard key={item.id} main={item} />
      ))
    }
  </div>
);

MainPage.propTypes = {
  product: PropTypes.shape(),
};

MainPage.defaultProps = {
  product: {},
};

export default MainPage;