import React from 'react'
import part1 from '../../../assets/part1.png'
import part2 from '../../../assets/part2.png'
import part3 from '../../../assets/part3.png'
import part4 from '../../../assets/part4.png'
import part5 from '../../../assets/par5.png'
import LargeImg from '../../../assets/LargeImg.png'
import './BodyBottom.css'

const BodyBottom = () => {
  return (
    <div>
         <div className='LineUP'>
              <div className='DontScroll'>
                 <img src={part1}/>
                 <p>Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions</p>
              </div>
              <div className='DontScroll'>
                 <img src={part2}/>
                 <p>Barista Coffee Company opens its first café in Ahmedabad</p>
              </div>
              <div className='DontScroll'>
                 <img src={part3}/>
                 <p>Good Flippin’ Burgers raises $4 Million in Series A Round</p>
              </div>
              <div className='DontScroll'>
                 <img src={part4}/>
                 <p>How Keventers is milking milkshakes business opportunity</p>
              </div>
              <div className='DontScroll'>
                 <img src={part5}/>
                 <p>Barbeque Nation Q4 net loss at Rs 11.60cr</p>
              </div>
          </div>
           <div className='midrange'>
            <h3>Treding</h3>
              <ul className='unordered'>
                <li className='List'>Raghul Gahndhi </li>
                <li className='List'>meta</li>
                <li className='List'>E-Commerce</li>
                <li className='List'>Fashion</li>
                <li className='List'>Sushant Singh </li>
                <li className='List'>Myntra launches </li>
                <li className='List'> E-commerce</li>
                <li className='List'>Live Cricket Score</li>
              </ul>
          </div>
          <img style={{marginTop:'30px'}} width='100%' src={LargeImg}/>
    </div>
  )
}

export default BodyBottom