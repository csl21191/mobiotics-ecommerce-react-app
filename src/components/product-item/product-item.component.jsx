import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import Counter from '../counter/counter.component.jsx';

import './product-item.styles.scss';

const ProductItem = ({ productId, brandName, productName, quantity, MRF, price, imageUrl, offerText, productSelectedCounter, handleAddCart, handlePlusCounter, handleMinusCounter }) => {
    return(
        <div className="product-item">
            <div className="product-image">
                <img src={imageUrl} alt={productName}/>
                <p>{offerText}</p>
            </div>
            
            <div className="product-details">
                <h4 className="brand-name">{brandName}</h4>
                <p className="product-title">{productName}</p>
                <span className="quantity">{quantity}</span>
                <span className="mrp"><strong>MRP - </strong>Rs.{MRF}</span>
                <span className="price">Rs.{price}</span>
                <div className="product-action">
                    <CustomButton handleClick={handleAddCart}>Add Cart</CustomButton>                   
                    <Counter 
                        id={productId}
                        handlePlusCounter={handlePlusCounter} 
                        handleMinusCounter={handleMinusCounter}
                        productSelectedCounter={productSelectedCounter}
                    />
                                                       
                </div>
            </div>
            
        </div>
    );
}

export default ProductItem;