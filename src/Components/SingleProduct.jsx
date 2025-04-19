import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const SingleProducts = () => {
  const { product } = useLocation().state || {}; // Get product from location state
  const img_url = "https://Sanse.pythonanywhere.com/static/images/";

  // Local state for the form
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState(""); // Loading state
  let [success, setSuccess] = useState(""); // Success message
  let [error, setError] = useState(""); // Error message

  // Deletion state
  let [deletePassword, setDeletePassword] = useState(""); // Password for deletion
  let [deleteLoading, setDeleteLoading] = useState(false); // Loading for deletion
  let [deleteSuccess, setDeleteSuccess] = useState(""); // Success message after deletion
  let [deleteError, setDeleteError] = useState(""); // Error message during deletion

  // Form submission handler for payment
  const submitForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading("Processing Payment...");
    setSuccess("");
    setError("");

    // Validate phone number format (Kenyan number with 254)
    if (!/^(254)\d{9}$/.test(phone)) {
      setError("Invalid phone number format. Please enter a valid Kenyan number.");
      setLoading("");
      return;
    }

    try {
      const data = new FormData();
      data.append("amount", product.product_cost); // Add product cost
      data.append("phone", phone); // Add phone number

      // Sending request to the backend for MPesa payment
      const response = await axios.post("https://Sanse.pythonanywhere.com/api/mpesa_payment", data);
      
      setLoading(""); // Stop loading state
      setSuccess(response.data.message); // Set success message
    } catch (error) {
      setLoading(""); // Stop loading state
      setError(error.response?.data?.message || error.message || "Something went wrong. Please try again.");
    }
  };

  // Deleting product handler
  const handleDelete = async () => {
    setDeleteLoading(true);
    setDeleteSuccess("");
    setDeleteError("");

    if (deletePassword !== "Andrew10951") { // Replace "yourPassword123" with your actual password
      setDeleteError("Invalid password. Please try again.");
      setDeleteLoading(false);
      return;
    }

    try {
      // Send request to delete the product
      await axios.delete(`https://Sanse.pythonanywhere.com/api/deleteproduct/${product.id}`);
      setDeleteLoading(false);
      setDeleteSuccess("Product deleted successfully.");
    } catch (error) {
      setDeleteLoading(false);
      setDeleteError(error.response?.data?.message || error.message || "Failed to delete the product.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <Navbar />

        {/* Product Image */}
        <div className="col-md-3 card shadow">
          <img
            src={img_url + product.product_photo}
            alt={product.product_name}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Product Details and Payment Form */}
        <div className="col-md-5 card shadow p-4">
          <h2>{product.product_name}</h2>
          <h3 className="text-warning">KSh {product.product_cost}</h3>
          <p className="text-muted">{product.product_desc}</p>

          {/* Display messages (loading, error, success) */}
          {loading && <div className="alert alert-info">{loading}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Payment Form */}
          <form onSubmit={submitForm}>
            <input
              type="number"
              className="form-control"
              placeholder="Amount (KSh)"
              required
              readOnly
              value={product.product_cost}
            />
            <br />
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Mpesa No (254xxxxxxxx)"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Update phone number state
            />
            <br />
            <button className="btn btn-primary" disabled={loading}>Pay Now</button>
          </form>

          <hr />
          {/* Product Deletion Section */}
          <h3>Delete Product</h3>
          <div className="alert alert-warning">
            <b>Warning: Deleting a product is permanent!</b>
          </div>

          {deleteLoading && <div className="alert alert-info">Deleting...</div>}
          {deleteSuccess && <div className="alert alert-success">{deleteSuccess}</div>}
          {deleteError && <div className="alert alert-danger">{deleteError}</div>}

          <input
            type="password"
            className="form-control"
            placeholder="Enter Password to Delete"
            value={deletePassword}
            onChange={(e) => setDeletePassword(e.target.value)}
          />
          <br />
          <button className="btn btn-danger" onClick={handleDelete} disabled={deleteLoading}>
            {deleteLoading ? "Deleting..." : "Delete Product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
