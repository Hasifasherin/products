import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext.jsx";   
import { toast } from "react-toastify";               
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();   

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <h2 className="loading-text">Loading Product...</h2>;

  // Handle Add to Cart
  const handleAddCart = () => {
    addToCart(product);   // Add full product object
    toast.success("Added to cart!");
  };

  return (
    <div className="product-details-container">
      
      {/* Go Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className="product-details-card">
        <div className="product-left">
          <img src={product.image} alt={product.title} className="product-img" />
        </div>

        <div className="product-right">
          <h2 className="product-title">{product.title}</h2>

          <h3 className="product-price">₹{product.price}</h3>

          <p className="product-category">
            Category: <span>{product.category}</span>
          </p>

          <p className="product-description">{product.description}</p>

          <button className="cart-btn" onClick={handleAddCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
