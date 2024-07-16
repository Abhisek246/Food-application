import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {         //accepting login state variable from app(root) component
    const [menu, setMenu] = useState("home");           //state to provide styling to navbar links
    const {getTotal} = useContext(StoreContext);        

  return (
    <div className='navbar'>
       <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
       <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu"? "active" : ""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact us")} className={menu === "contact us"? "active" : ""}>contact us</a>
       </ul>
       <div className="navbar-right">
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotal() && "dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
       </div>
    </div>
  ) 
}
export default Navbar