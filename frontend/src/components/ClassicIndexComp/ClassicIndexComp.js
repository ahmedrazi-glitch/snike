import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, fetchProducts } from '../../store/products';
import { Link } from 'react-router-dom';
import './classicIndexComp.css';
import ClassicIndexItem from '../ClassicIndexItem/ClassicIndexItem';

function ClassicIndexComp() {
  const dispatch = useDispatch();  
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className='classic-index-wrapper'>
          <div className="classic-products-container">
            {products.slice(-9).map(product => (
              <Link to={`/products/${product.id}`} className="classic-product-box" key={product.id}>
                <ClassicIndexItem product={product} />
              </Link>
            ))}
          </div>
      </div>
    </>
  );
}

export default ClassicIndexComp;