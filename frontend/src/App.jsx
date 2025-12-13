import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import products from "./data/products";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import NotAuthorizedPage from "./Components/NotAuthorizedPage";
import NotFoundPage from "./Components/NotFoundPage";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";

import AddProduct from "./Components/AddProduct";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/create-user" element={<RegisterPage />} />
          <Route path="/main" element={<GroceriesAppContainer/>}/>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct/>}/>
          <Route path="/not-authorized" element={<NotAuthorizedPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;


//<Route path="/add-product" element={<OmedyaPage/>}/>
//<Route path="/edit-product" element={<RyanPage/>}/>