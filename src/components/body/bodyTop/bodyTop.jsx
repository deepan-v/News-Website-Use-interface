import React from 'react'
import Hotsport from '../../../assets/Hotsport.png'
import AI from '../../../assets/AI.png'
import Shopping from '../../../assets/Shipping.png'
import './cssbody.css'

const BodyTop = () => {
  return (
    <div className='BodyTop'>
        <div className='TopItems'>
            <img src={Hotsport} alt="" />
             <div className='Paragraph'>
                <h4>HOTSPOTS</h4>
                <p>Luxury hotspots: 5 most expensive high streets in the..</p>
             </div>
        </div>
        <div className='TopItems'>
            <img src={AI} alt="" />
             <div className='Paragraph'>
                <h4>HOTSPOTS</h4>
                <p>Luxury hotspots: 5 most expensive high streets in the..</p>
             </div>
        </div>
        <div className='TopItems'>
            <img src={Shopping} alt="" />
             <div className='Paragraph'>
                <h4>HOTSPOTS</h4>
                <p>Luxury hotspots: 5 most expensive high streets in the..</p>
             </div>
        </div>
    </div>
  )
}

export default BodyTop