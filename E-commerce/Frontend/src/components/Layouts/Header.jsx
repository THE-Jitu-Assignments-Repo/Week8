// import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, loginUser } from "../../features/auth/userSlice";
import { Link, useNavigate } from "react-router-dom";
import {FaCaretDown, FaEnvelope, FaInfo, FaInfoCircle, FaShoppingCart, FaUser, FaUserLock} from 'react-icons/fa'
import {BsFillBasket3Fill} from 'react-icons/bs'
import "./Layout.css";


function Header() {
    const navigate = useNavigate();

  const user = useSelector(selectUser);

  // const { token }= useSelector(state=> state.user)

  const token = localStorage.getItem('token');

  const logoutOfApp = () => {
    localStorage.removeItem('token');
  }


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
            {token && <Link to="cart" className="links--tag">Cart <FaShoppingCart size={20} /><p className="cart--num"></p></Link>}
            {token && (
                <div className="dropdown"><span><FaUser size={20}/>Account </span><FaCaretDown/>
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
