import React from 'react';
import * as Icon from 'react-feather';

import './modal.styles.scss';

const Modal = ({ showModal, handleModalClose, totalPrice }) => {
    return(
        <div id="myModal" className={`${showModal ? "display-block" : "display-none"} modal`}>            
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={handleModalClose}>&times;</span>
                    <Icon.Check className="success-check" size={48} color="white"/>
                    <h3>Transaction Succesful</h3>
                </div>
                <div className="modal-body">
                    <p>Thank you for your order. Your transaction has been succesful. Your order has been received.</p>
                    <p><strong>Total Price - </strong>Rs. {totalPrice}</p>
                </div>                
            </div>
        </div>
    );
}

export default Modal;