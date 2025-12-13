import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormComponent from "./FormComponent.jsx";

export default function LoginPage() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [postResponse, setPostResponse] = useState("");
    const [messageColor, setMessageColor] = useState("white");

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setFormData((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value }
        });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/login", { ...formData, });
            setPostResponse(response.data.message);
             setMessageColor("green");
            if (response.status === 201) {
                localStorage.setItem("jwtToken", response.data.token);
                navigate("/main");
            }
        } catch (error) {
            console.log(error);
            setMessageColor("red");
            setPostResponse(error.response.data.message || "Login Failed");
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleLogin();
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
                nextPage="create-user"
                 currentPage="" />
        </div>

    );
}