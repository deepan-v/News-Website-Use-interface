import React from 'react'
import SocialMedia from '../../assets/socialmedi.png'
import Playstore from '../../assets/store.png'
import icons from '../../assets/indiaretail-logo-23 1.png'
import './Footer.css'
import FooterEnd from '../body/FooterEnd/FooterEnd'

const Footer = () => {
  return (
    <div>
        <hr></hr>
       <div className='Footer'>
       <div className='Largclass'>
         <img style={{maxWidth:'180px'}} src={icons} alt="" />
         <div className='OnlyItems'>
         <h4 >New Delhi</h4>
         <p>Images Multimedia Ltd.</p>
         <p>S-61 A, Pocket S, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020</p>
         </div>
         <div className='OnlyItems'>
         <h4>Mumbai</h4>
         <p> 
         E 519, Floral Deck Plaza
            Central MIDC Road, Opp. SEEPZ.
            Andheri East
            Mumbai 400093
         </p>
         </div>
         <div className='OnlyItems'>
            <strong>Contact Us</strong>
            <p> NO :+91-9867355551 </p>
            <p> Email : editor@indiaretailing.com </p>
         </div>
         <div className='OurMedia'>
                <h4>Our Social Media</h4>
                <img src={SocialMedia} alt="" />
         </div>
         <div className='OurStore'>
                <h4>Download Indiaretailing App</h4>
                <img style={{marginTop:'10px'}} src={Playstore} alt="" />
         </div>
       </div>
         <div className='RighFooter'>
           <div className='RighFooterinsideTop'>
           <div className='RighFooterinside'>
                <h3>About Us</h3>
                <p>About IndiaRetailing.com</p>
                <p>Meet the team</p>
                <p>Advertise with us</p>
                <p>Contact us</p>
            </div>
            <div className='RighFooterinside'>
                <h3>CATEGORIES</h3>
                <p>Fashion & Lifestyle</p>
                <p>Beauty & Wellness</p>
                <p>Food & Beverage</p>
                <p>Consumer Durables & IT</p>
                <p>Entertainment</p>
                <p>Home Décor & Furnishing</p>
            </div>
            <div className='RighFooterinside'>
                <h3>FEATURES</h3>
                <p>Leaders Ink</p>
                <p>People</p>
                <p>Finance & Funding </p>
                <p>D2C</p>
                <p>Shopping Centers</p>
                <p>Results</p>
            </div>
            <div className='RighFooterinside'>
                <h3>EVENTS</h3>
                <p>India Food Forum</p>
                <p>Shopping Centre Next</p>
                <p>Phygital Retail Convention</p>
                <p>India D2C Summit & Awards</p>
                <p>Internet Commerce Summit</p>    
            </div>
           </div>
           <div className='RighFooterinsideTomm'>
           <div className='RighFooterinside'>
                <h3>BOOKSTORE</h3>
                <p>Retail with Rasul Bailay</p>
                <p>The Store</p>
                <p>The Store</p>
                <p>IR Studio</p>
            </div>
            <div className='RighFooterinside'>
                <h3>VIDEOS</h3>
                <p>Magazines</p>
                <p>Yearbooks</p>
                <p>Yearbooks</p>
                <p>Other publications</p>
            </div>
            <div className='RighFooterinside'>
                <h3> Subscription box</h3>
                <p>Lorem ipsum </p>
                <p>Lorem ipsum </p>
                <p>Lorem ipsum </p>
                <p>Lorem ipsum </p>
            </div>
            <div className='RighFooterinside'>
                <h3>RETAIL FUNCTIONS</h3>
                <p>Marketing</p>
                <p>Technology</p>
                <p>Operations</p>
                <p>HR</p>
            </div>
           </div>
         </div>
       </div>
        <FooterEnd/>
    </div>
  )
}

export default Footer