import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import * as Icon from 'react-feather';

import './product-item.styles.scss';

const ProductItem = ({ brandName, productName, quantity, MRF, price, imageUrl, offerText, handlePlusCounter, handleMinusCounter }) => {
    return(
        <div className="product-item">
            <div className="product-image">
                <img src={imageUrl} alt={productName}/>
            </div>
            
            <div className="product-details">
                <p>{offerText}</p>
                <h4 className="brand-name">{brandName}</h4>
                <p className="product-title">{productName}</p>
                <span className="quantity">{quantity}</span>
                <span className="mrp"><strong>MRP - </strong>Rs.{MRF}</span>
                <span className="price">Rs.{price}</span>
                <div className="product-action">
                    <CustomButton>Add Cart</CustomButton> 
                    <div className="quantity-counter">
                        <Icon.Plus handlepluscounter={handlePlusCounter}/>
                        <span className="counter">0</span>
                        <Icon.Minus handleminuscounter={handleMinusCounter}/>
                    </div>                                   
                </div>
            </div>
            
        </div>
    );
}

export default ProductItem;