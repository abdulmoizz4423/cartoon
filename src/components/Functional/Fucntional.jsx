import React , {useState, useEffect} from 'react'
import './Functional.css'

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import PricingCalculator from '../Pricingcalculator/PricingCalculator'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { Parallax } from 'react-scroll-parallax';


import til1 from '../../assets/images/til1.png'
import til2 from '../../assets/images/til2.png'
import til3 from '../../assets/images/til3.png'
import til4 from '../../assets/images/til4.png'
import til5 from '../../assets/images/til5.png'

import medal1 from '../../assets/images/medal1.png'
import medal2 from '../../assets/images/medal2.png'
import medal3 from '../../assets/images/medal3.png'
import medal4 from '../../assets/images/medal4.png'
import medal5 from '../../assets/images/medal5.png'
import medal7 from '../../assets/images/medal7.png'
import medal8 from '../../assets/images/SeasonalRankTop0.webp'
import medal6 from '../../assets/images/meadal6.png'
import deliverapprox from '../../assets/images/deliveryapproc.png'
import priceapprox from '../../assets/images/pricapprox.png'

import pref1 from '../../assets/images/pref1.png'
import pref2 from '../../assets/images/pref2.png'
import pref3 from '../../assets/images/pref3.png'
import pref4 from '../../assets/images/pref4.png'

const Fucntional = (prop) => {

    const boxvariant = {
        visible: {
            opacity: 3, 
            y : 0,
            scale: 1,
            transition: {duration: 0.3}
        },
        hidden: {
            opacity: 3,
            scale: 1, 
            y: 200
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

    const control = useAnimation();
    const [ref, inView] = useInView();
  
    const control1 = useAnimation();
    const [ref1, inView1] = useInView();

    const control2 = useAnimation();
    const [ref2, inView2] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
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
    }, [control, inView, control1, inView1,control2, inView2,]);


    // const [value, setValue] = useState([30, 60]);
    const [funcAddon, setfuncAddon] = useState(['Core']);
    const [nopref, setnopref] = useState(false);
    // const [funcAddon1, setfuncAddon1] = useState([]);

    const [ express, setExpress] = useState(false); 
    const [ stream, setStream] = useState(false); 

    const coreaddon = () =>{
        if(funcAddon.includes('Core')){
            const arrayvalue = [ ...funcAddon ];
            let index = arrayvalue.indexOf('Core');
            arrayvalue.splice(index, 1);
            setfuncAddon(arrayvalue);

            var size = arrayvalue.length;
            if(size === 1){
                let index = arrayvalue.indexOf('HeroPref');
                arrayvalue.splice(index, 1);
                setfuncAddon(arrayvalue);
            }
        }
        else{
            if(funcAddon.includes('Support')){
                const arrayvalue = [ ...funcAddon ];
                let index = arrayvalue.indexOf('Support');
                arrayvalue.splice(index, 1);
                arrayvalue.push('Core');
                setfuncAddon(arrayvalue);
            }
            else{
                const arrayvalue = [ ...funcAddon ];
                arrayvalue.push('Core');
                setfuncAddon(arrayvalue);
            }
        }
        setnopref(false)
    }
    const supportaddon = () =>{
        if(funcAddon.includes('Support')){
            const arrayvalue = [ ...funcAddon ];
            let index = arrayvalue.indexOf('Support');
            arrayvalue.splice(index, 1);
            setfuncAddon(arrayvalue);

            var size = arrayvalue.length;
            if(size === 1){
                let index = arrayvalue.indexOf('HeroPref');
                arrayvalue.splice(index, 1);
                setfuncAddon(arrayvalue);
            }
        }
        else{
            if(funcAddon.includes('Core')){
                const arrayvalue = [ ...funcAddon ];
                let index = arrayvalue.indexOf('Core');
                arrayvalue.splice(index, 1);
                arrayvalue.push('Support');
                setfuncAddon(arrayvalue);
            }
            else{
                const arrayvalue = [ ...funcAddon ];
                arrayvalue.push('Support');
                setfuncAddon(arrayvalue);
            }
        }
        setnopref(false)
    }

    const noprefaddon = () =>{
        if(funcAddon.includes('Support') || funcAddon.includes('Core') || funcAddon.includes('HeroPref')){
            const arrayvalue = [ ...funcAddon ];
            let index = arrayvalue.indexOf('Support');
            let index1 = arrayvalue.indexOf('Core');
            let index2 = arrayvalue.indexOf('HeroPref');
            arrayvalue.splice(index, 1);
            arrayvalue.splice(index1, 1);
            arrayvalue.splice(index2, 1);
            setfuncAddon(arrayvalue);
        }
        setnopref(true)
    }

    const heroprefaddon = () =>{
        if(funcAddon.includes('HeroPref')){
            const arrayvalue = [ ...funcAddon ];
            let index = arrayvalue.indexOf('HeroPref');
            arrayvalue.splice(index, 1);
            setfuncAddon(arrayvalue);
        }
        else{
            if(funcAddon.includes('Support') || funcAddon.includes('Core') ){
                const arrayvalue = [ ...funcAddon ];
                arrayvalue.push('HeroPref');
                setfuncAddon(arrayvalue);
            }      
        }
        setnopref(false)
    }
    const upperLimit = (e) => {
        var temp = prop.value[0]
        prop.setValue([temp, e.target.value]);
    } 
    const lowerLimit = (e) => {
        var temp = prop.value[1]
        prop.setValue([e.target.value, temp]);
    } 

    const [medal, setMedal] = useState();

    useEffect(() => {
        setMedal(prop.value[1] - prop.value[0])
        // console.log(medal)
      }, [prop.value[0], prop.value[1]]);

    const onSliding = () =>{
        
    }


  return (
    <>
        <section className="functional-sec">
            <div className="container-lg">
                <motion.div className="funtional-tiles"  variants={boxvariant} ref={ref}
                            initial="hidden"
                            animate={control}>
                    <div className={prop.functonalTile === 'ranked'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('ranked')}>
                        <div className="til-img">
                            <img src={til1} alt="" />
                        </div>
                        <button>
                            RANKED CLASSIC
                        </button>
                    </div>
                    <div className={prop.functonalTile === 'calibration'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('calibration')}>
                        <div className="til-img">
                            <img src={til2} alt="" />
                        </div>
                        <button>
                            CALIBRATION GAMES
                        </button>
                    </div>
                    <div className={prop.functonalTile === 'dota'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('dota')}>
                        <div className="til-img">
                            <img src={til3} alt="" />
                        </div>
                        <button>
                            DOTA PLUS
                        </button>
                    </div>
                    <div className={prop.functonalTile === 'behave'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('behave')}>
                        <div className="til-img">
                            <img src={til4} alt="" />
                        </div>
                        <button>
                            BEHAVIOUR BOOST
                        </button>
                    </div>
                    <div className={prop.functonalTile === 'low'? 'functional-til activefunctionaltile':'functional-til'} onClick={()=> prop.setFunctonalTile('low')}>
                        <div className="til-img">
                            <img src={til5} alt="" />
                        </div>
                        <button>
                            LOW PRIORITY
                        </button>
                    </div>
                </motion.div>
                <motion.div className="funtional-widget" variants={leftvariant} ref={ref1}
                            initial="hidden"
                            animate={control1}>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <h2>
                            {
                                prop.functonalTile === 'ranked' ? 'Current MMR Rank ' : 
                                prop.functonalTile === 'calibration' ? 'Calibration games ' :
                                prop.functonalTile === 'dota' ? 'Current Dota Plus Hero Level' :
                                prop.functonalTile === 'behave' ? 'Current BEHAVIOR SCORE ' :
                                prop.functonalTile === 'low' ? 'Low Priority Removal ' :
                                ''
                            }
                            <span><img src={
                                
                                medal >= 0 && medal <= 669 ? medal3 : 
                                medal >= 770 && medal <= 1539 ? medal2 :
                                medal >= 1540 && medal <= 2309 ? medal1 :
                                medal >= 2310 && medal <= 3079 ? medal6 :
                                medal >= 3080 && medal <= 3849 ? medal5 :
                                medal >= 3850 && medal <= 4619 ? medal4 :
                                medal >= 4620 && medal <= 5619 ? medal7 :
                                medal >= 5620 && medal <= 8000 ? medal8 :
                                ''
                            } alt="" /></span></h2>
                            <div className="boostbtns">
                                <button className={prop.topbanner === 'solo'? 'boostbtn activeboostbtn' : 'boostbtn' } onClick={()=> prop.setTopBanner('solo')}>
                                    
                                {
                                        prop.functonalTile === 'ranked' ? 'MMR SOLO BOOST ' : 
                                        prop.functonalTile === 'calibration' ? 'SOLO ' :
                                        prop.functonalTile === 'dota' ? 'SOLO' :
                                        prop.functonalTile === 'behave' ? 'SOLO' :
                                        prop.functonalTile === 'low' ? 'SOLO ' :
                                        ''
                                    }
                                    
                                </button>
                                <button className={prop.topbanner === 'duo'? 'boostbtn activeboostbtn' : 'boostbtn' } onClick={()=> prop.setTopBanner('duo')}>
                                {
                                        prop.functonalTile === 'ranked' ? 'MMR DUO BOOST ' : 
                                        prop.functonalTile === 'calibration' ? 'DUO ' :
                                        prop.functonalTile === 'dota' ? 'DUO' :
                                        prop.functonalTile === 'behave' ? 'DUO' :
                                        prop.functonalTile === 'low' ? 'DUO ' :
                                        ''
                                    }
                                    
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="status-tags">
                                <span className='approx'>
                                    <div className="status-img">
                                        <img src={deliverapprox} alt="" />
                                    </div>
                                    <p>Approx delivery time: <span>{prop.value[1] - prop.value[0]} days</span></p>
                                </span>
                                <span className='approx'>
                                    <div className="status-img">
                                        <img src={priceapprox} alt="" />
                                    </div>
                                    <p>Price estimate <span>{prop.totalPrice}</span></p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="sldierpart">
                        <PricingCalculator targetMMR={prop.value[1]} currentMMR={prop.value[0]} addons={funcAddon} stream={stream} express={express} setTotalPrice={prop.setTotalPrice}/>
                        <RangeSlider min={0} max={
                            
                                prop.functonalTile === 'ranked' ? '8000' : 
                                prop.functonalTile === 'calibration' ? '30' :
                                prop.functonalTile === 'dota' ? '30' :
                                prop.functonalTile === 'behave' ? '10000' :
                                prop.functonalTile === 'low' ? '10' :
                                ''
                            } step={
                                prop.functonalTile === 'ranked' ? '1' : 
                                prop.functonalTile === 'calibration' ? '5' :
                                prop.functonalTile === 'dota' ? '5' :
                                prop.functonalTile === 'behave' ? '1' :
                                prop.functonalTile === 'low' ? '1' :
                                ''
                            } onInput={prop.setValue} value={prop.value} onThumbDragStart={onSliding()}/>
                        <div className="rangeslidervalues"> 
                        {
                                prop.functonalTile === 'ranked' ? 
                                (
                                    <>
                                        <span>0</span>
                                        <span>1000</span>
                                        <span>2000</span>
                                        <span>3000</span>
                                        <span>4000</span>
                                        <span>5000</span>
                                        <span>6000</span>
                                        <span>7000</span>
                                        <span>8000</span>
                                    </>
                                )
                                
                                : 
                                prop.functonalTile === 'calibration' ? (
                                    <>
                                        <span>0%</span>
                                        <span>5%</span>
                                        <span>10%</span>
                                        <span>15%</span>
                                        <span>20%</span>
                                        <span>25%</span>
                                        <span>30%</span>
                                    </>
                                )
                                :
                                prop.functonalTile === 'dota' ? (
                                    <>
                                    <span>0</span>
                                        <span>5</span>
                                        <span>10</span>
                                        <span>15</span>
                                        <span>20</span>
                                        <span>25</span>
                                        <span>30</span>
                                    </>
                                ) :
                                prop.functonalTile === 'behave' ? (
                                    <>
                                        <span>0</span>
                                        <span>1000</span>
                                        <span>2000</span>
                                        <span>3000</span>
                                        <span>4000</span>
                                        <span>5000</span>
                                        <span>6000</span>
                                        <span>7000</span>
                                        <span>8000</span>
                                        <span>9000</span>
                                        <span>10000</span>

                                    </>
                                ) :
                                prop.functonalTile === 'low' ? (
                                    <>
                                        <span>0</span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                        <span>7</span>
                                        <span>8</span>
                                        <span>9</span>
                                        <span>10</span>

                                    </>
                                ) :
                                ''


                            }
                            
                        </div>
                    </div>
                    <div className="checkinputs">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  onChange={()=> setExpress(!express)}/>
                            <label class="form-check-label" for="flexCheckDefault">
                            <span></span>
                                express (+25%)
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" onChange={()=> setStream(!stream)}/>
                            <label class="form-check-label" for="flexCheckDefault1" >
                                <span></span>
                                 Stream (+15%)
                            </label>
                        </div>
                    </div>
                    <div className="numberrangeinput">
                        <input type="number" onInput={(e) => lowerLimit(e)} value={prop.value[0]} min={
                            0
                        } max={
                            prop.functonalTile === 'ranked' ? '8000' : 
                                prop.functonalTile === 'calibration' ? '30' :
                                prop.functonalTile === 'dota' ? '30' :
                                prop.functonalTile === 'behave' ? '10000' :
                                prop.functonalTile === 'low' ? '10' :
                                ''
                        }/>
                        <span>-</span>
                        <input type="number"  onInput={(e) => upperLimit(e)} value={prop.value[1]} min={
                            prop.value[0]
                        } max={
                            prop.functonalTile === 'ranked' ? '8000' : 
                                prop.functonalTile === 'calibration' ? '30' :
                                prop.functonalTile === 'dota' ? '30' :
                                prop.functonalTile === 'behave' ? '10000' :
                                prop.functonalTile === 'low' ? '10' :
                                ''
                        }/>
                        <button>Apply</button>
                    </div>
                    {
                        prop.functonalTile != 'dota' ? <div className="preferences">
                        <p>ROLE</p>
                        <div className={funcAddon.includes('Core') ? 'preftile activepreftile': 'preftile'} onClick={()=>coreaddon()}>
                            <div className="preimg">
                                <img src={pref1} alt="" />
                            </div>
                            <button>CORE</button>
                        </div>
                        <div className={funcAddon.includes('Support') ? 'preftile activepreftile': 'preftile'}  onClick={()=>supportaddon()}>
                            <div className="preimg">
                                <img src={pref2} alt="" />
                            </div>
                            <button>SUPPORT</button>
                        </div>
                        <div className={nopref ? 'preftile activepreftile': 'preftile'} onClick={()=>noprefaddon()}>
                            <div className="preimg">
                                <img src={pref3} alt="" />
                            </div>
                            <button>NO PREFERENCE</button>
                        </div>
                        <div className={funcAddon.includes('HeroPref') ? 'preftile activepreftile': 'preftile'}  onClick={()=>heroprefaddon()} >
                            <div className="preimg">
                                <img src={pref4} alt="" />
                            </div>
                            <button>HERO PREFERENCES (15%)</button>
                        </div>
                    </div> : <div className="preferences">
                    <button className='boostbtn' onClick={()=> prop.setTopBanner('solo')}>Select your hero</button>
                    </div>
                    }
                    
                </motion.div>
                <motion.div className="duoboostblock" variants={rightvariant} ref={ref2}
                            initial="hidden"
                            animate={control2}>
                    <div className="row align-items-center">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-8">
                            <h2>Duo Boost</h2>
                            <p>Do you want to play on your own account with our booster as a partner? Then select this option!</p>
                        </div>
                        <div className="col-lg-3">
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    </>
  )
}

export default Fucntional