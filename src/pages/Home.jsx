import { useState, useEffect } from 'react';
import { getProducts } from '../Services/products';
import MainPage from '../components/Main/index';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      setProducts(result);
    };
    fetchData();
  }, []);

  return (
    <MainPage product={products} />
  );
};

export default HomePage;
