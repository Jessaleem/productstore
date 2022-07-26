import './ProductCard.css'
import { getProducts } from '../Services/products'
import { useEffect, useState } from 'react'

const ProductCard = () => {

  const [products, setProducts] = useState([])

  useEffect (( ) => {
    const fetchData = async () => {
      const result = await getProducts();
      setProducts(result)
    }
    fetchData();
  }, [] )

 

  return(

    <section>
      <nav className='product__container'>
        {
          products.map((product) => (
          <div key= {product.id}>  
            <div className = "productCard__container">         
              <div className='productCard__imageWrapper' >
                <img className = 'productCard__image' src={product.image} alt={product.title}/> 
              </div>
              <div className='ProductCard__Text'>     
                <span><b>{product.title}</b></span>
              </div>
              <div className='ProductCard__button'>
                <button className='productCard__button'></button>
              </div>  
            </div>          
          </div>
          )
          )
        }
      </nav>  
    </section>
  )
}

export default ProductCard;