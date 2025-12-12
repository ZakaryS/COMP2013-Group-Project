import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    await axios.post("http://localhost:3000/add-product", data);
    navigate("/main"); 
  };

  return <ProductForm handleOnSubmit={handleSubmit} />;
}
