
import React from 'react';
import './Cart.css'


const Cart = props => {
    // destructuring porps
    const {selectedServices}=props;

    // finding total length of selected array
    const totalSelected=selectedServices.length;

    // finding total service cost
    const totalCost=selectedServices.reduce((total,service) =>total+=service.serviceCost,0);
    
    return (
        <div className='cart-main'>
            <h1>Your selected services: {totalSelected}</h1>
            <p>Total service Cost: ${totalCost}</p>
            <ul className="cart-list">
                {
                    selectedServices.map(service => <li className='cart-item' key={service.id}>{service.serviceName}</li>)
                }
            </ul>
            <ul className='cart-icon-main'>
                <li className='cart-icon'><i class="fab fa-facebook"></i></li>
                <li className='cart-icon'><i class="fab fa-instagram"></i></li>
            </ul>
        </div>
    );
};

export default Cart;