import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";
import Brands from "../pages/Brands";
import Sales from "../pages/Sales";
import Firms from "../pages/Firms";
import Products from "../pages/Products";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            {/* nested oldugu icin /home yazmamak icin bu sekilde index element dedik. 
            yani dashboarda gelince direkt home acilmis olacak. ancak bunun icin dashboard sayfasinda 
            acilmasini istedigim kisma (home olacak kisma) <Outlet/> yazmak zorundayim */}
            <Route path="purchases" element={<Purchases />} />
            <Route path="sales" element={<Sales />} />
            <Route path="products" element={<Products />} />
            <Route path="firms" element={<Firms />} />
            <Route path="brands" element={<Brands />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;