import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import products from "./data/products";
//import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import NotAuthorizedPage from "./Components/NotAuthorizedPage";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/create-user" element={<RegisterPage />} />
          <Route path="/not-authorized" element={<NotAuthorizedPage/>}/>
          <Route path="/edit-product" element={<EditProduct/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

//<Route path="/main" element={<LiaoPage/>}/>
//<Route path="/add-product" element={<OmedyaPage/>}/>
//<Route path="/edit-product" element={<RyanPage/>}/>