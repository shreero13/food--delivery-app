import React from 'react'
import './Header.css'
import headerImg from '../../../assets/header_img.png'; // Adjust the path accordingly


const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${headerImg})`,backgroundRepeat:'no-repeat' }}>
      

   <div className="header-contents">
   <h1>Order Your Favourite Food Here</h1>
   <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties.
     Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
    <button>View Menu</button>
    </div>
    </div>
  )
}

export default Header