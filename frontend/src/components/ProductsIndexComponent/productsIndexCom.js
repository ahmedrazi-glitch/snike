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
  }, [dispatch]);

  return (
    <>
      <div className="product-container">
        {products.map(product => (
          <Link key={product.id} to={`/products/${product.id}`} className="product-box">
            {product.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductsIndexCom;


