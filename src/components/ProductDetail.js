import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return ()=>{
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="card p-3">
          <div className="row">
            <div className="col-md-6  align-items-center">
              {/* Columna izquierda */}
              <img className="img-fluid" src={image} alt={title} />
            </div>
            <div className="col-md-6  align-items-center">
              {/* Columna derecha */}
              <h1>{title}</h1>
              <h2>
                <div className="tag-label">${price}</div>
              </h2>
              <h3 className="brown block header">{category}</h3>
              <p>{description}</p>
              <button className="btn btn-primary" tabIndex="0">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
