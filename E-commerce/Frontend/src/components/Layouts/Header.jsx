// import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {  selectUser } from "../../features/auth/userSlice";
import { Link, useNavigate } from "react-router-dom";
import {FaEnvelope, FaInfoCircle, FaShoppingCart, FaUser, FaUserLock} from 'react-icons/fa'
import {BsFillBasket3Fill} from 'react-icons/bs'
import jwt_decode from 'jwt-decode'
import "./Layout.css";


function Header() {
    const navigate = useNavigate();

  const user = useSelector(selectUser);

  const { cart }= useSelector(state=> state.cart)
  // console.log(cart?.cartItems);

  const token = localStorage.getItem('token');
  console.log(token);
  // window.location.reload();

  const logoutOfApp = () => {
    localStorage.removeItem('token');
    navigate('/')
  }


  const decoded = token? jwt_decode(token) : null;
  // console.log(decoded);

  return (
    <div className="header-main">
      <div className="navbar">
        <div className="title--tag">
          <h2><i className="title--tag--E">E</i><span>-Market</span></h2>
        </div>
        <div className="navlinks">
          <nav className="nav--links">
            {!token &&<Link to="login" className="links--tag"><FaUser /> Login/Register</Link>}
            {token && <Link to="home" className="links--tag">Home</Link> }  
            {token && <Link to="/products" className="links--tag">Products<BsFillBasket3Fill /></Link>}
            {token && <Link to="/about"  className="links--tag">About<FaInfoCircle /> </Link>}
            {token && <Link to="/contact" className="links--tag">Contact<FaEnvelope /> </Link>}
            {token && <Link to="cart" className="links--tag">Cart <FaShoppingCart size={20} /><p className="cart--num">{cart?.cartItems?.reduce((total, item)=> total + item.quantity,0)}</p></Link>}
            {token && (
                <div className="dropdown"> 
                <div className="img--p">
                  <img src="../../../public/assests/avatar2.png" alt="avatar" />
                  </div>
                  <p>{decoded?.email}</p>
                    <div className="dropdown--content">

                <ul>

                    <li className="css-button--arrow--black"><FaUser />Profile</li>
                    <li className="css-button--arrow--black" onClick={logoutOfApp}><FaUserLock /> Logout</li>
                </ul>
                    </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
