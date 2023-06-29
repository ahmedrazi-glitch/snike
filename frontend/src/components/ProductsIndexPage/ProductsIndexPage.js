import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, fetchProducts, fetchSearchResults } from '../../store/products';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CategoryComponent from '../CategoryComponent/CategoryComponent.js';
import './productsIndexPage.css';

function ProductIndexPage() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const params = useParams();

  useEffect(() => {
    const arr = window.location.pathname.split('/');
    if (arr.includes('search')) {
      dispatch(fetchSearchResults(params));
    } else {
      dispatch(fetchProducts());
    }
  }, []);


  return (
    <div className='page-wrapper' >
      <div className="product-index-page">
        {/* <CategoryComponent/> */}
        <div className="products-container">
          {products.map((product, index) => (
            <Link className='actual-link' to={`/products/${product.id}`}>
            <div className="product" key={index}>
              <img className='product-image' src={product.photoUrl} alt={product.name} />
              <h3 className='product-name' >{product.name}</h3>
              <h2 className='product-category' >{product.category}</h2>
              <p className='product-price' >${product.price}</p>
            </div>
            </Link>
          ))}
        </div> 
      </div>
    </div>
  );
};

export default ProductIndexPage;

