import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, fetchProducts } from '../../store/products';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './productsIndexCom.css';
import ProductIndexItem from '../ProductIndexItem/ProductIndexItem';

function ProductsIndexCom() {
  const dispatch = useDispatch();  
  const products = useSelector(getProducts);
  

  useEffect(() => {
    
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className='original'>
        <h1 className='header' >Trending</h1>
        <div className="product-container">
          {products.slice(0, 3).map(product => (
            <Link to={`/products/${product.id}`} className="product-box">
              <ProductIndexItem product={product} />
            </Link>
          ))} 
        </div>
      </div>
    </>
  );
}

export default ProductsIndexCom;


