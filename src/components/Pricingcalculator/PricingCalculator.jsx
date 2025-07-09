import React, { useState } from 'react';

const PricingCalculator = (props) => {
    const BASE_PRICE_PER_100_MMR = 7.0;
    const MMR_Multiplier = {
        '0-1000': 1.0,
        '1000-2000': 1.1,
        '2000-3000': 1.2,
        '3000-3500': 1.3,
        '3500-4000': 1.4,
        '4000-4500': 1.8,
        '4500-5000': 2.8,
        '5000-5500': 4.8,
        '5500-6000': 6.6,
        '6000-6500': 13.2,
        '6500-7000': 19.6,
        '7000-7500': 22.8,
        '7500-8000': 26.0
    };
    const Addon_Multipliers = {
        "Core": 0.0,
        "Support": 0.2,
        "Solo": 0.0,
        "Duo": 0.8,
        "DuoQueueSupport": 1.2,
        "Streaming": 0.25,
        "Priority": 0.25,
        "HeroPref": 0.15
    };

    // const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = (targetMMR, currentMMR, addons) => {
        let sum_of_addons = 1;
        addons.forEach(addon => {
            sum_of_addons += Addon_Multipliers[addon];
        });

        let price = 0;
        for(let x = currentMMR; x < targetMMR; x += 100) {
            for(let bracket in MMR_Multiplier) {
                let [lower, upper] = bracket.split("-").map(Number);
                if(x >= lower && x < upper) {
                    price += BASE_PRICE_PER_100_MMR * MMR_Multiplier[bracket] * sum_of_addons;
                    break;
                }
            }
        }

        if(props.stream){
            price =  1.15*price
            console.log(price)
        }
        if(props.express === true){
            console.log('expresses')
            price =  1.25*price
        }
       
        props.setTotalPrice(price);
    };

    // Call the function on component mount or when props change
    React.useEffect(() => {
        calculateTotalPrice(props.targetMMR, props.currentMMR, props.addons);
    }, [props.targetMMR, props.currentMMR, props.addons, props.stream, props.express]);

}

export default PricingCalculator;