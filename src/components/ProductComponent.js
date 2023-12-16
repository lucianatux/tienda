import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col-6 col-md-3 mb-3 " key={id}>
        <Link to={`/product/${id}`}>
        <div className="card d-flex flex-column h-100 align-items-center">
          <img src={image} alt={title} className="card-img-top img-fluid fixed-size-image p-3" />
          <div className="card-body">
            <div className="card-title">
              <strong className="bold">{title}</strong>
            </div>
            <div className="card-text">${price}</div>
            <div className="card-text">
              <small className="text-muted">{category}</small>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  // const {id, title} = products[0];
  console.log(products);
  return <>{renderList}</>;
};

export default ProductComponent;
