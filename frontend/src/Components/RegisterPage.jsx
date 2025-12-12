import FormComponent from "./FormComponent";
import axios from "axios";
import { useState } from "react";

export default function RegisterPage() {
 
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");
  const [messageColor, setMessageColor] = useState("white");

  
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/create-user", {
        ...formData,
      });
      setPostResponse(response.data.message);
    } catch (error) {
      setMessageColor("red");
      setPostResponse(error.response.data.message || "Cannot add username");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleRegister();
    setFormData({ username: "", password: "" });
  };

  return (

    <div className="login-form-container">
      <FormComponent
        formData={formData}
        postResponse={postResponse}
        messageColor={messageColor}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        currentPage="create-user"
        nextPage=""
      />
    </div>

  );
}
