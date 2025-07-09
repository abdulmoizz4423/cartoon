import React from 'react'
import './Homeintro.css'

import homeintro from '../../assets/images/homeintro.svg';
import homeintro2 from '../../assets/images/homeintrobanner2.svg';


const Homeintro = (prop) => {
  return (
    <section className='homeintro singlebg'>
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-7">
                     <h1>
                        GET DESIRED RANK <span>IN SWIFTBOOST</span>
                     </h1>
                     <div className="homeintrobtns">
                        <button className='startboostbtn'>
                            <a href="">START BOOST</a>
                        </button>
                        <button className='registerbtn'>
                            <a href="">REGISTER</a>
                        </button>
                     </div>
                     <p>
                     This Discount is Available When You Register a New Account. Check Your Email for the   
                     <span> Discount Code.</span>
                     </p>
                </div>
                <div className="col-lg-5">
                    {prop.topbanner === 'solo'? 
                    
                    <div className="homeintrobanner">
                        <img src={homeintro}alt="" />
                    </div>
                    : 
                    <div className="homeintrobanner homeduobanner">
                        <img src={homeintro2}alt="" />
                    </div>
                    
                    }
                    
                </div>

            </div>
        </div>
    
    
    </section>
  )
}

export default Homeintro