import React, {useEffect} from 'react'
import './Purchaseinfo.css'

import s1 from '../../assets/images/3.png'
import s2 from '../../assets/images/4.png'
import s3 from '../../assets/images/5.png'
import s4 from '../../assets/images/6.png'
import s5 from '../../assets/images/facebook.png'
import s6 from '../../assets/images/twitter.png'

import purchaseinfobanner from '../../assets/images/purchaseinfobanner.svg'
import getmmr from '../../assets/images/getmmr.png'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";


const Purchaseinfo = () => {

  
    const topvariant = {
        visible: {
            opacity: 3, 
            y : 0,
            scale: 1,
            transition: {duration: 0.6}
        },
        hidden: {
            opacity: 3,
            scale: 1, 
            y: -200
        }
    }
 
const leftvariant = {
    visible: {
        opacity: 3, 
        x : 0,
        scale: 1,
        transition: {duration: 0.6}
    },
    hidden: {
        opacity: 3,
        scale: 1, 
        x: 200
    }
}

    
    
    const control1 = useAnimation();
    const [ref1, inView1] = useInView();
    
    const control2 = useAnimation();
    const [ref2, inView2] = useInView();
    
    useEffect(() => {
      if (inView1) {
        control1.start("visible");
      } else {
        control1.start("hidden");
      }
      if (inView2) {
        control2.start("visible");
      } else {
        control2.start("hidden");
      }
    }, [control1, inView1,control2, inView2,]);
    
  return (
    <>
    <section className="purchaseinfo">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <motion.div className="purchaseinfobanner" variants={topvariant} ref={ref1}
                            initial="hidden"
                            animate={control1}>
                        <img src={purchaseinfobanner} alt="" />
                    </motion.div>
                </div>
                <motion.div className="col-lg-6" variants={leftvariant} ref={ref2}
                            initial="hidden"
                            animate={control2}>
                    <h2>WHAT HAPPENS, WHEN I MAKE PURCHASE?</h2>
                    <div className="infotile">
                        <span>01</span>
                        <h3>Instant redirection</h3>
                        <p>Right after payment, you will be redirected back to <span>swiftboost.gg</span>, where you will register for an account.</p>
                    </div>
                    <div className="infotile">
                        <span>02</span>
                        <h3>Smart Client Dashboard</h3>
                        <p>Our client dashboard will have all the features you need to extend, or cancel your boost, speak to your assigned supervisor. Boost progress is updated in real time.
                        Add-ons you do have attached to your service, are accessible on the dashboard. Loyalty progress & swift points are displayed here.</p>
                    </div>
                    <div className="infotile">
                        <span>03</span>
                        <h3>The Boost Begins</h3>
                        <p>Orders, once taken up by our boosters, usually within 5-10 minutes. Sometimes may take a little longer than that, though those situations are rare. You will get pinged, that a match has been found for your contract.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
    <section className="servicefeature">
        <div className="container">
            <div className="col-lg-8">
                <h2>Dota 2 Boost Service Features</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="servicetile">
                            <span>01</span>
                            <h3>We are the swiftest MMR boosting service available</h3>
                            <p>Only possible because of our hand picked selection of boosters, and the large amount of boosters we have on hand ready to work for you.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="servicetile">
                        <span>02</span>
                            <h3>Our service operates 24/7</h3>
                            <p>Our streamlined order distribution system allows for your boost to start as soon as check out completes.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="servicetile">
                        <span>03</span>
                            <h3>We don't offer
fake discounts</h3>
                            <p>Due to our loyalty program our loyal customers can really get the best price in the industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="getmmr">
        <div className="container">
            <h2>GET MMR BOOST FROM <span>Swiftboost.gg!</span> </h2>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                    <div className="getmmrtile">
                        <span><img src={getmmr} alt="" /></span> 
                        <h3>Swift As The Wolves Of Icewrack</h3>
                        <p>A robust check out system, and streamlined order distribution lets us get your orders started almost immediately!</p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="getmmrtile">
                        <span><img src={getmmr} alt="" /></span>
                        <h3>Swift As The Wolves Of Icewrack</h3>
                        <p>A robust check out system, and streamlined order distribution lets us get your orders started almost immediately!</p>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
            <button>
                START BOOSTING NOW
            </button>
        </div>
    </section>
    <section className="dontmissout">
        <div className="container">
            <div className="solcialicons">
                <span><img src={s1} alt="" /></span>
                <span><img src={s2} alt="" /></span>
                <span><img src={s3} alt="" /></span>
                <span><img src={s4} alt="" /></span>
                <span><img src={s5} alt="" /></span>
                <span><img src={s6} alt="" /></span>
            </div>
            <h3>don’t miss out, SAVE 33% ON BOOSTING NOW</h3>
            <p>Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut </p>
                <div className="coupeninput">
                  <input type="text" />
                  <button>ENTER</button>
                </div>
        </div>
    </section>
    </>
  )
}

export default Purchaseinfo