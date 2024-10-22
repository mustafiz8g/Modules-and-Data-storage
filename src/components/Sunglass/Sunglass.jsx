import React, { useEffect } from 'react';


import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply ,devideTheFirstNumberByTheSecondNumber as devide} from '../../Utils/Calculate';
// import add from '../../Utils/Calculate';
useEffect
const Sunglass = () => {

    const first = 33;
    const second = 98;
    const sum = add(first, second)
    const mult = multiply(first, second)
    const vaag = devide(first, second)
    return (
        <div>
            
        </div>
    );
};

export default Sunglass;