import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
      const jwtToken = localStorage.getItem("jwtToken");
      if (!jwtToken) { return null; }
      try {
        console.log(jwtDecode(jwtToken));
        const user = jwtDecode(jwtToken);
        return {
          _id: user._id,
          username: user.username,
          admin: user.admin,
        };
      } catch { return null; }
     });
    
    useEffect(() => { if (!user || user === null) navigate("/not-authorized") }, [user, navigate]);


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
