import React from "react";
import './categoryComponent.css'

function CategoryComponent() {

  return (
    <>
      <div className="categories-wrapper">
        <div className="category-comp" >
          <ul>
            <li>All</li>
            <li>Mens</li>
            <li>Womens</li>
            <li>Kids</li>
            <li>Accessories</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CategoryComponent;