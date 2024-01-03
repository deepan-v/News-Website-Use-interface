import React from 'react'
import Raghul from '../../../assets/RaghulGandhi.png'
import ies from '../../../assets/Scooteritkt.png'
import './Bodywspl.css'


const Bodywspl = () => {
  return (
    <div className='Somthing'>
        <hr/>
        <div className='wevt'>
        <h3  style={{margin:'20px 0px 20px 50px', display:'block'}}>Web Special</h3>
        <div className='webSplContents'>
            <div className='Bodywsplleft'>
            <img style={{maxWidth:'100%'}} className='ragul2' src={Raghul}/>
            <ul  className='circle'>
                <li>Cinema industry welcomes lowering GST rates</li><hr/>
                <li>Patanjali Ayurved to sell 7% stake in Patanjali</li><hr/>
                <li>Select Citywalk opens 4 new stores in June</li><hr/>
                <li>Govt imposes import restrictions on certain gold </li><hr/>
                <li>Joom Marketplace offers a global window for sellers</li><hr/>
            </ul>
            <img src={ies}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Bodywspl