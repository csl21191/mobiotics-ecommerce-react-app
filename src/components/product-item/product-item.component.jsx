import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import * as Icon from 'react-feather';

import './product-item.styles.scss';

const ProductItem = ({ brandName, productName, quantity, MRF, price, imageUrl, offerText, handleAddCart, handlePlusCounter, handleMinusCounter }) => {
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
                    <CustomButton handleClick={handleAddCart}>Add Cart</CustomButton> 
                    <div className="quantity-counter">
                        <Icon.Plus onClick={handlePlusCounter} className="icon"/>
                        <span className="counter">0</span>
                        <Icon.Minus onClick={handleMinusCounter} className="icon"/>
                    </div>                                   
                </div>
            </div>
            
        </div>
    );
}

export default ProductItem;