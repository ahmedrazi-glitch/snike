import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, fetchProducts } from '../../store/products';
import { Link } from 'react-router-dom';
import CategoryComponent from '../CategoryComponent/CategoryComponent.js';
import './productsIndexPage.css';

function ProductIndexPage() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  return (
    <div className='page-wrapper' >
      <div className="product-index-page">
        <CategoryComponent/>
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


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts, fetchProducts } from '../../store/products';
// import { Link } from 'react-router-dom';
// import './productsIndexPage.css';

// function ProductIndexPage() {
//   const dispatch = useDispatch();
//   const products = useSelector(getProducts);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);

//   return (
//     <div className="product-index-page">
//       <div className="sidebar">
//         {/* Sidebar content */}
//       </div>
//       <div className="products-container">
//         {products.map((product, index) => (
//           <Link className="actual-link" to={`/products/${product.id}`} key={index}>
//             <div className="product">
//               <img src={product.photoUrl} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>${product.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductIndexPage;