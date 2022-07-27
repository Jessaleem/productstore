import './ProductCard.css';

const ProductCard = (props) => {
  const { products } = props;

  return (

    products.map((product) => (

      <div key={product.id}>
        <div className="productCard__container">
          <div className="productCard__imageWrapper">
            <img className="productCard__image" src={product.image} alt={product.title} />
          </div>
          <div className="ProductCard__Text">
            <span><b>{product.title}</b></span>
          </div>
          <div className="ProductCard__button">
            <button type="submit" className="productCard__button"> Go </button>
          </div>
        </div>
      </div>
    ),
    )
  );
};

export default ProductCard;
