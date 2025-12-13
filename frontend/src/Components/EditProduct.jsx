import EditForm from "./EditForm"
import { useNavigate } from "react-router-dom";

export default function EditProduct(){

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
  const navigate = useNavigate();
  
  useEffect(() => { if (!user || user === null) navigate("/not-authorized") }, [user, navigate]);

    const handleOnChange = (e) => {
        setFormData((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value }
        });
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
        
        <EditForm
        formData={formData}
        />
        
    )
}