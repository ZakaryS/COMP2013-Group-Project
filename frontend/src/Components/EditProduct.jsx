import EditForm from "./EditForm"

export default function EditProduct(){

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