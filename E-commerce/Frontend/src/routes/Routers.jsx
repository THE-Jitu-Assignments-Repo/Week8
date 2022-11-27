import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Layout from "../components/Layouts/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Notfound from "../pages/Notfound";


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
