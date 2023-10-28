import React from 'react';
import {FiHeart} from 'react-icons/fi';
import { AiOutlineUser , AiOutlineShoppingCart} from 'react-icons/ai'
import './nav.css'
function nav() {
  return <nav className='nav'>
    <div className="nav-cotainer">
      <input type="text" placeholder='Search' />
    </div>
    <div className="profile-container">
      <a href="#"><FiHeart className='nav-icon'/></a>
      <a href="#"><AiOutlineShoppingCart className='nav-icon'/>  </a>
      <a href="#"><AiOutlineUser className='nav-icon'/></a>
    </div>
  </nav>
}
export default nav;