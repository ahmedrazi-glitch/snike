import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, fetchProducts } from '../../store/products';
import { Link } from 'react-router-dom';
import './productsIndexCom.css';
import ProductIndexItem from '../ProductIndexItem/ProductIndexItem';

function ProductsIndexCom() {
  const dispatch = useDispatch();  
  // const { productId } = useParams();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className='original'>
        <h1 className='header' >Originals</h1>
        <div className="product-container">
          {products.slice(0, 3).map(product => (
            <Link to={`/products/${product.id}`} className="product-box">
              {/* {product.photoUrl} */}
              {/* <img src={product.photoUrl} /> */}
              <ProductIndexItem product={product} />
              {/* {product.name} */}
            </Link>
          ))}
          
        </div>
        {/* {products.map(product => (
          product.name
        ))} */}
      </div>
    </>
  );
}

export default ProductsIndexCom;


