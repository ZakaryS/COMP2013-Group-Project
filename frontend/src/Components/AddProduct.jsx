import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    image: "",
    price: "",
  });


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/add-product", formData);
      navigate("/main");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <ProductForm
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      formData={formData}
      isEditing={false}
      postResponse={null}
    />

    <div>
        <Link to="/main">Click here to go back to main page</Link>
      </div>
    </div>
  );
}
