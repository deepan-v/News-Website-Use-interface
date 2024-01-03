import React from 'react'
import Raghul from '../../../assets/RaghulGandhi.png'
import Group1 from '../../../assets/Group 18896.png'
import KFC from '../../../assets/kfc.png'
import Flower from '../../../assets/kfc.png'
import Bikes from '../../../assets/Scooteritkt.png'
import comman from '../../../assets/commenUncle.png'
import shopping from '../../../assets/AI Store.png'
import Ir from '../../../assets/Group 33924.png'
import './BodyMiddle.css'
import Girls from '../../../assets/Mask group (1).png'
import Meet from '../../../assets/Mask group (2).png'
import Keyoard from '../../../assets/Mask group (3).png'

const BodyMiddle = () => {
  return (
    <div>
        <div className='BodyMiddle'>
        <div className='BodyMiddleTop' >
            <img className='raghulimage'  src={Raghul} alt="" />
            <div className='ParaforRaghul'>
                <img  src={Group1} alt="" />
                <div className='Pararaghulitems'>
                        <h4>SELECT CITYWALK</h4>
                        <p>Wow! Momo Foods enters Bhopal with Wow! </p>
                        <div className='PararaitemEnd'>
                            <p># Citywalk</p>
                            <p>#reel stories podcast</p>
                        </div>
                </div>
            </div>
            <hr />
            <div className='ParaforRaghul'>
                <img src={KFC} alt="" />
                <div className='Pararaghulitems'>
                        <h4>SELECT CITYWALK</h4>
                        <p>Wow! Momo Foods enters Bhopal with Wow! </p>
                        <div className='PararaitemEnd'>
                            <p># Citywalk</p>
                            <p>#reel stories podcast</p>
                        </div>
                </div>
            </div>
            <hr />
            <div className='ParaforRaghul'>
                <img src={Flower} alt="" />
                <div className='Pararaghulitems'>
                        <h4>SELECT CITYWALK</h4>
                        <p>Wow! Momo Foods enters Bhopal with Wow! </p>
                        <div className='PararaitemEnd'>
                            <p># Citywalk</p>
                            <p>#reel stories podcast</p>
                        </div>
                </div>
            </div>
        </div>

        <div className='BodyMiddleMid ' >
            <h3>Latest News</h3>
            <div className='sameImgcontent'>
                <img src={comman} alt="" />
                <p style={{textAlign:'center'}}>Unwrapping the Archies’ reinvention plan</p>
            </div>
            <div className='sameImgcontent'>
                <img src={shopping} alt="" />
            </div>
             <div className='Forwidth'>
             <p>How AI is enhancing stores, How AI is enhancing stores</p>
             <hr/>
             <div className='OnlyPara'>
                <p className=''>Croma opens 58 outlets in 6, Croma retails more than 16,000</p>
                <p className='Forlear'>These companies created a lot of hype when they listed on the...</p>
             </div>
             <hr/>
             <div className='OnlyPara'>
                <p>Croma opens 58 outlets in 6, Croma retails more than 16,000</p>
                <p className='Forlear'>These companies created a lot of hype when they listed on the...</p>
             </div>
             </div>
        </div>
        <div className='BodyMiddleBotttom' style={{ width:'400px'}} >
            <img className='ikeimg' src={Bikes}/>
            <div className='IRcontent'>
                <div className='IrTop'>
                    <div className='imgcontent'>
                    <img src={Ir}/>
                        <div>
                            <h5>IR Prime</h5>
                            <p >Top 3  stories of the day</p>
                        </div>
                    </div>
                    <p className='SeeAll'>See All</p>
                </div>
                    <div className='irItems'>
                        <img src={Girls} alt="" />
                        <p>8 retail companies headed by women, These brands are not just famous ...</p>
                    </div>
                    <div className='irItems'>
                        <img src={Meet} alt="" />
                        <p>Joom Marketplace offers a global window for sellers...</p>
                    </div>
                    <div className='irItems'>
                        <img src={Keyoard} alt="" />
                        <p>FreshToHome fixing a broken meat market retailing in...</p>
                    </div>
            </div>
            <div className='Subscribe'>
                    <h2>Subscribe</h2>
                    <input type="text" placeholder='Your Email Address' />
                    <button>Subscribe</button>
            </div>
        </div>
        
    </div>
    </div>
    
  )
}

export default BodyMiddle