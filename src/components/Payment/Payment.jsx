import React, {useState, useEffect} from "react";
import "./Payment.css";
import deliverapprox from "../../assets/images/deliveryapproc.png";

import pay1 from "../../assets/images/paypal.png";
import pay2 from "../../assets/images/mastercard.png";
import pay3 from "../../assets/images/visa .png";
import pay4 from "../../assets/images/cpayment.png";

import poster1 from "../../assets/images/poster1.png";
import poster2 from "../../assets/images/postere2.png";
import poster3 from "../../assets/images/poster3.png";
import poster4 from "../../assets/images/poster4.png";
import poster5 from "../../assets/images/poster5.png";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { Parallax } from 'react-scroll-parallax';


const Payment = (prop) => {


  const [payment, setPayment] = useState(1);
 

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

const rightvariant = {
    visible: {
        opacity: 3, 
        x : 0,
        scale: 1,
        transition: {duration: 0.6}
    },
    hidden: {
        opacity: 3,
        scale: 1, 
        x: -200
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
      <section className="payment">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div className="paymentblock" variants={rightvariant} ref={ref1}
                            initial="hidden"
                            animate={control1}>
                <div className="col-lg-4">
                  <div className="status-tags">
                    <span className="approx">
                      <div className="status-img">
                        <img src={deliverapprox} alt="" />
                      </div>
                      <p>
                        Approx delivery time: <span>2 days</span>
                      </p>
                    </span>
                  </div>
                </div>
                <div className="paymentservice">
                  <button className={payment === 1? "activepaymentbtn" :''} onClick={()=> setPayment(1)}>
                    <img src={pay1} alt="" />
                  </button>
                  <button className={payment === 2? "activepaymentbtn" :''} onClick={()=> setPayment(2)}>
                    <img src={pay2} alt="" />
                  </button>
                  <button className={payment === 3? "activepaymentbtn" :''} onClick={()=> setPayment(3)}>
                    <img src={pay3} alt="" />
                  </button>
                  <button className={payment === 4? "activepaymentbtn" :''} onClick={()=> setPayment(4)}>
                    <img src={pay4} alt="" />
                  </button>
                </div>

                <p>Ranked Classic Boosting </p>
                <p>
                  from 1200 MMR to 2175 MMR <span>(inc. 75 MMR for Free)</span>
                </p>

                <div className="exraoption">
                  <p>Extra Options:</p>
                  <p className="optionname">Pick Heroes</p>
                </div>
                <div className="priceblock">
                  <select name="" id="">
                    <option value="" selected>
                      USD
                    </option>
                    <option value="" selected>
                      USD
                    </option>
                    <option value="" selected>
                      USD
                    </option>
                    <option value="" selected>
                      USD
                    </option>
                  </select>
                  {/* <span>${prop.value[1]/prop.value[0]}</span> */}
                  <span></span>
                </div>
                <p className="pricetext">
                  Price after
                  <span> after 40.0% discount: </span>
                  <span className="redpricespan">$59.09 </span>
                  <span> $34.99</span>
                </p>
                <div className="coupeninput">
                  <input type="text" />
                  <button>ENTER</button>
                </div>
                <div className="coupeninput">
                  <input type="text" />
                  <button>ENTER</button>
                </div>
                <span className="paymentinfo">
                  we only accept PayPal, MasterCard, and Visa via PayPal for
                  payment at this time.
                </span>
                <button>START BOOST</button>
              </motion.div>
            </div>
            <div className="col-lg-6 h-100">
              <motion.div className="pamentposters h-100" variants={leftvariant} ref={ref2}
                            initial="hidden"
                            animate={control2}>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="paymentposttile">
                      <img src={poster1} alt="" />
                      <span>Free Pick Hero Option</span>
                    </div>
                  </div>
                  <div className="col-lg-4  col-md-4">
                    <div className="paymentposttile">
                      <img src={poster2} alt="" />
                      <span>Free Pick Hero Option</span>
                    </div>
                  </div>
                  <div className="col-lg-4  col-md-4">
                    <div className="paymentposttile">
                      <img src={poster3} alt="" />
                      <span>Free Pick Hero Option</span>
                    </div>
                  </div>
                  <div className="col-lg-4  col-md-4">
                    <div className="paymentposttile">
                      <img src={poster4} alt="" />
                      <span>Free Pick Hero Option</span>
                    </div>
                  </div>
                  <div className="col-lg-4  col-md-4">
                    <div className="paymentposttile">
                      <img src={poster5} alt="" />
                      <span>Free Pick Hero Option</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
