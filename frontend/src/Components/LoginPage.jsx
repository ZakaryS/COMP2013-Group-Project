import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function LoginPage() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [postResponse, setPostResponse] = useState("");

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setFormData((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value }
        });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post("http:localhost:3000/login", { ...formData, });
            setPostResponse(response.data.message);
            if (response.status === 201) {
                Cookies.set("jwt-authorization", response.data.token);
                navigate("/main");
            }
        } catch (error) {
            console.log(error);
            setPostResponse(error.response.data.message || "Login Failed");
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleLogin();
        setFormData({ username: "", password: "" });
    };

    return (
        <div className="login">
            <h1>Groceries App</h1>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="username">Username </label>
                <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} required />
                <br/><br/>
                <label htmlFor="password">Password </label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleOnChange} required/>
                <br/><br/>
                <button type="submit">Login</button>
                <br/><br/>
                <p>not a member yet? click <Link to="/register">here</Link> to join</p>
                <br/><br/>
                <p style={{ color: "red" }}>{postResponse}</p>
            </form>
        </div>
    )
}