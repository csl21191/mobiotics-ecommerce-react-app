import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';

import './bottom-bar.styles.scss';

const BottomBar = ({ quantity, total, handleCheckout }) => {
    return (
        <div className="bottom-bar">
            <div className="bottom-bar-left">
                <h5>Quantity - {quantity}</h5>
                <h5>Total - Rs.{total}</h5>
            </div>
            <div className="bottom-bar-right">
                <CustomButton handleClick={handleCheckout}>Checkout</CustomButton>
            </div>
        </div>
    );
}

export default BottomBar;