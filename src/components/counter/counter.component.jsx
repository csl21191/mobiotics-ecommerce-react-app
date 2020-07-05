import React from 'react';
import * as Icon from 'react-feather';

import './counter.styles.scss';

const Counter = ({ id, handleMinusCounter, handlePlusCounter, productSelectedCounter }) => {    
    return (
        <div className="quantity-counter">            
            <Icon.Plus onClick={handlePlusCounter} className="icon" id={id}/>
            {/* <input type="number" className="input-number" name="" id="" min="0"/> */}
            <span className="counter">{productSelectedCounter}</span>
            <Icon.Minus onClick={handleMinusCounter} className="icon"/>
        </div>
    );
}

export default Counter;