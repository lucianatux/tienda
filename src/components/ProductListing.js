import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import {setProducts} from '../redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
      dispatch(setProducts(response.data));
  };
  useEffect(()=>{
    fetchProducts();
  }, []);
  console.log("products:", products);

  return (
    <div className="ui grid container">
      <h1>Product Listing</h1>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
