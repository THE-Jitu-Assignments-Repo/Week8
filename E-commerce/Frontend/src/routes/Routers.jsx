import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/products/Products";
import Contact from "../pages/contacts/Contact";
import About from "../pages/about/About";
import Cart from "../pages/cart/Cart";
import Layout from "../components/Layouts/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Notfound from "../pages/notfound/Notfound";


const Routers = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/" element={<Home />}/> 
        <Route path="*" element={<Notfound />}/>
      </Route>
    </Routes>
  );
};

export default Routers;
