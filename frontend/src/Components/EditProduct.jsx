import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";

export default function EditProduct(){

    const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    image: "",
    price: ""
    });

    //useEffect
    useEffect(() => {
      handleOnEdit(id);
    });


    const handleOnChange = (e) => {
        setFormData((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value }
        });
    };

    const handleOnSubmit = async (e) => {
      e.preventDefault();
      try{
          handleOnUpdate(formData.id);
          handleResetForm()
      } catch(error) {
          console.log(error.message);
      }
  };

    const handleOnEdit = async (id) => {
    try {
      const productToEdit = await axios.get(`http://localhost:3000/products/${id}`);
      setFormData({
        id: productToEdit.data.id,
        productName: productToEdit.data.productName,
        brand: productToEdit.data.brand,
        image: productToEdit.data.image,
        price: productToEdit.data.price,
      });
    } catch (error) {
      console.log(error);
    }
  }


  const handleOnUpdate = async (id) => {
    try{
      const result = await axios.patch(`http://localhost:3000/products/${id}`, formData);
      setPostResponse(result.data.message);
    } catch (error) {
      console.log(error);
    }
  }


    return (
        
        <ProductForm 
        formData={formData}
        handleOnSubmit={handleOnSubmit} 
        handleOnChange={handleOnChange}
        isEditing={true}
        />
        
    )
}