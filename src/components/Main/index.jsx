import './index.css';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import Header from '../Header';

const MainPage = ({ product }) => (
  <>
    <Header />
    <div className="mainPage__container">
      {
        product.map((item) => (
          <ProductCard key={item.id} main={item} />
        ))
      }
    </div>
  </>
);

MainPage.propTypes = {
  product: PropTypes.shape(),
};

MainPage.defaultProps = {
  product: {},
};

export default MainPage;
