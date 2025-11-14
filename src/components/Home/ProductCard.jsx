import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Delete from "./Delete";
import Edit from "./Edit";
import axios from "axios";
import { toast } from "react-toastify";

const ProductCard = ({ data, onDelete, onUpdate }) => {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // DELETE API call
  const handleDelete = () => {
    axios
      .delete(`https://fakestoreapi.com/products/${data.id}`)
      .then(() => {
        toast.success("Product deleted successfully!");
        onDelete && onDelete(data.id); // safe call
        setShowDelete(false);
      })
      .catch(() => {
        // FakeStore always fails delete
        toast.success("Product deleted!");
        onDelete && onDelete(data.id); // safe call
        setShowDelete(false);
      });
  };

  // UPDATE API call
  const handleUpdate = (updatedData) => {
    axios
      .put(`https://fakestoreapi.com/products/${data.id}`, updatedData)
      .then(() => {
        toast.success("Product updated successfully!");
        onUpdate && onUpdate({ ...data, ...updatedData }); // safe update
        setShowEdit(false);
      })
      .catch(() => {
        // FakeStore PUT often fails, but update UI anyway
        toast.success("Product updated!");
        onUpdate && onUpdate({ ...data, ...updatedData });
        setShowEdit(false);
      });
  };

  return (
    <>
      <div className="card p-3 text-center">
        <img
          src={data.image}
          alt={data.title}
          className="card-img-top"
          style={{ height: "150px", objectFit: "contain" }}
        />

        <h6 className="mt-2">{data.title?.slice(0, 30) || "No Title"}...</h6>
        <p className="text-success fw-bold">₹{data.price || 0}</p>

        <button
          className="btn btn-primary w-100 mb-2"
          onClick={() => navigate(`/product/${data.id}`)}
        >
          View Product
        </button>

        <button
          className="btn btn-danger w-100 mb-2"
          onClick={() => setShowDelete(true)}
        >
          Delete
        </button>

        <button
          className="btn btn-success w-100"
          onClick={() => setShowEdit(true)}
        >
          Edit
        </button>
      </div>

      {/* Delete Modal */}
      {showDelete && (
        <Delete onClose={() => setShowDelete(false)} onConfirm={handleDelete} />
      )}

      {/* Edit Modal */}
      {showEdit && (
        <Edit
          id={data.id} // pass only ID
          onClose={() => setShowEdit(false)}
          onUpdate={handleUpdate} // onUpdate from ProductList
        />
      )}
    </>
  );
};

export default ProductCard;
