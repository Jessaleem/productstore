import { useState, useEffect } from 'react'
import { getProducts } from '../Services/products'
import ProductCard from '../components/ProductCard'


const HomePage = () => {

  const [products, setProducts] = useState([])

  useEffect (( ) => {
    const fetchData = async () => {
      const result = await getProducts();
      setProducts(result)
    }
    fetchData();
  }, [] )


  return(

    <ProductCard products={products}/>

  )
}

export default HomePage;


