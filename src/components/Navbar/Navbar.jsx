import React from 'react'
import logo from '../../assets/indiaretail-logo-23 1.png'
import Search from '../../assets/search.png'
import '../Navbar/Navbar.css'
import Menu from '../../assets/Vector (1).png'


const Navbar = () => {
  return (
    <div className='NavbarItems'>
        <div className='NavTop'>
            <div className='inputitems'>
            <img src={Search} alt="" />
            <input className='NavInput' placeholder='Search Here'/>
            </div>
            <img className='logo' width='200px' src={logo} />
             <div className='Navotn'>
                <button >Subscribe</button>
                <button > SIGN IN</button>
             </div>
        </div>
        <hr />
        <div className='Navbottom'>
            <img src={Menu} alt='Img'/>
            <ul className='ulToflex'>
                <li ><a style={{color:'red'}} href='#'>Home </a></li>
                <li><a href='#'>Categories </a></li>
                <li><a href='#'>IR Prime </a></li>
                <li><a href='#'>Event </a></li>
                <li><a href='#'>bookStore </a></li>
                <li><a href='#'>Newsletter </a></li>
                <li><a href='#'> Video </a></li>
            </ul>
            <div className='FlexEnd'>
                <img src={Menu}/>
                <p>Friday, 30 June 2023</p>
            </div>
        </div>
        <div className='flexCenter'>
            <p>Fashion & Lifestyle</p>
            <p> Beauty & Wellness</p>
            <p> Food & Beverage</p>
            <p>Consumer Durables & IT</p>
            <p>Entertainment </p>
            <p>Home Decor & Furnishing </p>
            <p>Specialty Retail</p>
        </div>
       
    </div>
  )
}

export default Navbar