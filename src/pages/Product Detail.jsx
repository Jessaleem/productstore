import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../Services/products';
import Header from '../components/Header';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct(id);
      setProduct(result);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <div className="productDetail__container">
        <div className="productDetail__imageWrapper">
          <img className="productDetail__image" src={product.image} alt={product.title} />
        </div>
        <div className="productDetail__description">
          {product.description}
        </div>
        <div className="productDetail__description">
          {product.price}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
