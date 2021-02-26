import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total,prd) => total + prd.price, 0);

    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(shipping > 0){
        shipping = 15.00;
    }
    else if(shipping > 35){
        shipping = 5.00;
    }

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const tax = total/10;
    const grandTotal = total + shipping + tax;


    return (
        <div className="delivery-container">
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: { formatNumber(grandTotal) }</p>
        </div>
    );
};

export default Cart;