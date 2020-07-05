import React, { Component } from 'react';
import ProductItem from '../product-item/product-item.component.jsx';
import BottomBar from '../bottom-bar/bottom-bar.component.jsx';
import Modal from '../modal/modal.component.jsx';

import './products.styles.scss';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartQuantity: 0,
            cartTotal: 0,
            showModal: false,
            productSelectedCounter: 0,
            products : [],
            cartItems: []
        }
    }      

    handlePlusCounter = (e) => {       
        this.setState({ 
            cartItems: ( ( e.target.id !== '' ) ? [ ...this.state.cartItems, {
                                        id: e.target.id, 
                                        productSelectedQuantity: 1, 
                                        price: this.state.products
                                                    .filter( product => product.id === parseInt( e.target.id ) )
                                                    .map( ( selectedProduct ) => selectedProduct.price )
                                } ] :                           
                        this.state.cartItems )
        }, () => {
            if(this.state.cartItems) {
                this.setState({cartQuantity: this.state.cartItems.length})
                console.log(this.state.cartItems);
                let cartPrice1 = 0;
                
                this.state.cartItems.forEach(element => {
                    //console.log(element.price[0]);
                    cartPrice1 = cartPrice1+element.price[0]
                    
                    this.setState({cartTotal: cartPrice1})                
                });
            }
        } )        
    } 

    handleMinusCounter = () => {
        if(this.state.cartQuantity > 0) {
            this.setState({cartQuantity: this.state.cartQuantity - 1}, () => console.log(this.state.cartQuantity))
        }        
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
        fetch(`../../../products.json`)
            .then(response => response.json())
            .then(products => this.setState({products: products}))
            .catch(error => console.error(error));
    }   

    render() {
        return (
            <div>
                <div className="products">                
                    {
                        this.state.products.map(({id,  ...product }) => (                           
                            <ProductItem 
                                key={id} 
                                handleAddCart={this.handleAddCart} 
                                handlePlusCounter={this.handlePlusCounter} 
                                handleMinusCounter={this.handleMinusCounter}
                                productSelectedCounter={this.state.productSelectedCounter}
                                productId={id}
                                {...product} 
                            />
                        ))
                    }                 
                </div>
                <BottomBar 
                    quantity={this.state.cartQuantity} 
                    total={this.state.cartTotal} 
                    handleCheckout={this.handleCheckout}
                />
                <Modal 
                    showModal={this.state.showModal} 
                    handleModalClose={this.handleModalClose} 
                    totalPrice={this.state.cartTotal}
                />
            </div>            
        );
    }
}

export default Products;