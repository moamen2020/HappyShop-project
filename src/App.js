import HomePage from "./Pages/Home/HomePage";
import NavBarLogin from "./Components/Utility/NavBarLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import Rigester from "./Pages/Auth/RigesterPage";
import AllCategoryList from "./Pages/Category/AllCategoryList";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePayMethoudPage from "./Pages/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrderPage from "./Pages/Admin/AdminAllOrderPage";
import AdminOrderDetalisPage from "./Pages/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminSubCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoritePage from "./Pages/User/UserFavoritePage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";

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
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrderPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addproducts" element={<AdminAddProductsPage />} />

          <Route path="/user/all-orders" element={<UserAllOrdersPage />} />
          <Route path="/user/favorite" element={<UserFavoritePage />} />
          <Route path="/user/address" element={<UserAddAddressPage />} />
          <Route path="/user/user-profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
