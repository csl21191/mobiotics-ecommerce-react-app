import React, { Component } from 'react';
import ProductItem from '../../components/product-item/product-item.component.jsx';
import BottomBar from '../../components/bottom-bar/bottom-bar.component.jsx';
import Modal from '../../components/modal/modal.component.jsx';

import './shoppage.styles.scss';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartQuantity: 0,
            cartTotal: 0,
            showModal: false,
            products : []
        }
    }

    

    handlePlusCounter = (e) => {
        
        console.log("this.state(prevState)");
    } 

    handleMinusCounter = () => {
        console.log("minus counter function hit");
    }

    handleCheckout = () => {        
        this.setState({ showModal: true});        
    }

    handleAddCart = () => {
        console.log("cart button clicked");
    }

    handleModalClose = () => {
        this.setState({ showModal: false});
    }

    componentDidMount() {
        fetch('../../data/products.json')
            .then(response => response.json())
            .then(products => console.log(products))
            .catch(error => console.log("error is coming",error));
    }   

    render() {
        return (
            <div>
                <div className="shop-page">                
                    {
                        this.state.products.map(({id,  ...product }) => (
                            <ProductItem key={id} handleAddCart={this.handleAddCart} handlePlusCounter={this.handlePlusCounter} handleMinusCounter={this.handleMinusCounter} {...product} />
                        ))
                    }                 
                </div>
                <BottomBar quantity={this.state.cartQuantity} total={this.state.cartTotal} handleCheckout={this.handleCheckout}/>
                <Modal showModal={this.state.showModal} handleModalClose={this.handleModalClose} totalPrice={this.state.cartTotal}/>
            </div>            
        );
    }
}

export default ShopPage;