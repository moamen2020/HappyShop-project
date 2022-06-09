import HomePage from "./Pages/Home/HomePage";
import NavBarLogin from "./Components/Utility/NavBarLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import Rigester from "./Pages/Auth/RigesterPage";
import AllCategoryList from "./Pages/Category/AllCategoryList";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Rigester />} />
          <Route path="/allcategory" element={<AllCategoryList />} />
          <Route path="/brand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
