import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="card p-3 text-center">
      <img
        src={data.image}
        alt={data.title}
        className="card-img-top"
        style={{ height: "150px", objectFit: "contain" }}
      />

      <h6 className="mt-2">{data.title.slice(0, 30)}...</h6>
      <p className="text-success fw-bold">₹{data.price}</p>

      <button className="btn btn-primary w-100 mb-2">View Product</button>
      <button className="btn btn-danger w-100 mb-2">Delete</button>
      <button className="btn btn-success w-100">Edit</button>
    </div>
  );
};

export default ProductCard;
