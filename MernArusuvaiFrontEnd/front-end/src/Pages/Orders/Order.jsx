import React, { useContext, useState } from 'react';
import './Order.css';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [payment, setPayment] = useState("cod");
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const { getTotalCartAmount, cartItems, currency, deliveryCharge } = useContext(StoreContext);
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock successful order placement
        alert(`Order placed successfully! Payment method: ${payment}`);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-field">
                    <input 
                        type="text" 
                        name='firstName' 
                        onChange={onChangeHandler} 
                        value={data.firstName} 
                        placeholder='First name' 
                        required 
                    />
                    <input 
                        type="text" 
                        name='lastName' 
                        onChange={onChangeHandler} 
                        value={data.lastName} 
                        placeholder='Last name' 
                        required 
                    />
                </div>
                <input 
                    type="email" 
                    name='email' 
                    onChange={onChangeHandler} 
                    value={data.email} 
                    placeholder='Email address' 
                    required 
                />
                <input 
                    type="text" 
                    name='street' 
                    onChange={onChangeHandler} 
                    value={data.street} 
                    placeholder='Street' 
                    required 
                />
                <div className="multi-field">
                    <input 
                        type="text" 
                        name='city' 
                        onChange={onChangeHandler} 
                        value={data.city} 
                        placeholder='City' 
                        required 
                    />
                    <input 
                        type="text" 
                        name='state' 
                        onChange={onChangeHandler} 
                        value={data.state} 
                        placeholder='State' 
                        required 
                    />
                </div>
                <div className="multi-field">
                    <input 
                        type="text" 
                        name='zipcode' 
                        onChange={onChangeHandler} 
                        value={data.zipcode} 
                        placeholder='Zip code' 
                        required 
                    />
                    <input 
                        type="text" 
                        name='country' 
                        onChange={onChangeHandler} 
                        value={data.country} 
                        placeholder='Country' 
                        required 
                    />
                </div>
                <input 
                    type="text" 
                    name='phone' 
                    onChange={onChangeHandler} 
                    value={data.phone} 
                    placeholder='Phone' 
                    required 
                />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{currency}{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
                        </div>
                    </div>
                </div>
                <div className="payment">
                    <h2>Payment Method</h2>
                    <div onClick={() => setPayment("cod")} className="payment-option">
                        <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="" />
                        <p>COD ( Cash on delivery )</p>
                    </div>
                    <div onClick={() => setPayment("stripe")} className="payment-option">
                        <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="" />
                        <p>Stripe ( Credit / Debit )</p>
                    </div>
                </div>
                <button className='place-order-submit' type='submit'>
                    {payment === "cod" ? "Place Order" : "Proceed To Payment"}
                </button>
            </div>
        </form>
    );
};

export default Order;