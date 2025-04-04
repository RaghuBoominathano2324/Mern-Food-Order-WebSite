import React, { useContext, useState } from 'react';
import './Signin.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ setShowLogin }) => {
    const { setToken, loadCartData } = useContext(StoreContext);
    const [currState, setCurrState] = useState('Sign Up');
    const [isAdmin, setLocalIsAdmin] = useState(false);
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        cuisine: '',
        preferences: '',
        userid: '',
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };



   
    //on Login Method
   
    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const baseURL = 'http://localhost:4000';
            // const baseURL = 'https://finalfullstackcapstoneprojectbackend.onrender.com';

            let endpoint;
            let loginData;
    
            if (isAdmin) {
                endpoint = '/api/auth/admin-login';
                loginData = { userId: data.userid, password: data.password };
            } else {
                if (currState === 'Login') {
                    endpoint = '/api/user/login';
                    loginData = {
                        email: data.email,
                        password: data.password,
                    };
                } else {
                    endpoint = '/api/user/register';
                    loginData = {
                        email: data.email,
                        password: data.password,
                        name: data.name,
                        phone: data.phone,
                        address: data.address,
                        cuisine: data.cuisine,
                        preferences: data.preferences,
                    };
                }
            }
    
            const response = await axios.post(`${baseURL}${endpoint}`, loginData);
    
            if (response.data.success) {
                // Handle admin login
                if (isAdmin) {
                    const { token } = response.data;
                    localStorage.setItem('adminToken', token);
                    toast.success('Welcome Admin!');
                    setShowLogin(false);
                    navigate('/admindashboard');
                    return;
                }
    
                // Handle user login/registration
                if (currState === 'Login') {
                    const { token } = response.data;
                    localStorage.setItem('userToken', token);
                    setToken(token);
                    await loadCartData({ token });
                    toast.success('Welcome User!');
                    navigate('/user');
                    setShowLogin(false);
                } else {
                    toast.success('Registration successful! Please log in to continue.');
                    setShowLogin(false);
                    setCurrState('Login');
                }
            } else {
                throw new Error(response.data.message || 'Authentication failed');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };
































    return (
        <div className="login-popup">
            <div className="login-popup-container small-centered">
                <div className="login-form-section">
                    <div className="login-popup-title">
                        <h2>{isAdmin ? 'Admin Login' : currState}</h2>
                        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                    </div>
                    <form onSubmit={onLogin} className="login-popup-inputs">
                        {isAdmin ? (
                            <>
                                <input
                                    name="userid"
                                    onChange={onChangeHandler}
                                    value={data.userid}
                                    type="text"
                                    placeholder="Admin User ID"
                                    required
                                />
                                <input
                                    name="password"
                                    onChange={onChangeHandler}
                                    value={data.password}
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </>
                        ) : (
                            <>
                                {currState === 'Sign Up' && (
                                    <>
                                        <input
                                            name="name"
                                            onChange={onChangeHandler}
                                            value={data.name}
                                            type="text"
                                            placeholder="Your name"
                                            required
                                        />
                                        <input
                                            name="phone"
                                            onChange={onChangeHandler}
                                            value={data.phone}
                                            type="text"
                                            placeholder="Your phone number"
                                            required
                                        />
                                        <input
                                            name="address"
                                            onChange={onChangeHandler}
                                            value={data.address}
                                            type="text"
                                            placeholder="Your address"
                                            required
                                        />
                                        <input
                                            name="cuisine"
                                            onChange={onChangeHandler}
                                            value={data.cuisine}
                                            type="text"
                                            placeholder="Preferred Cuisine (Optional)"
                                        />
                                        <input
                                            name="preferences"
                                            onChange={onChangeHandler}
                                            value={data.preferences}
                                            type="text"
                                            placeholder="Food Preferences (Optional)"
                                        />
                                    </>
                                )}
                                <input
                                    name="email"
                                    onChange={onChangeHandler}
                                    value={data.email}
                                    type="email"
                                    placeholder="Your email"
                                    required
                                />
                                <input
                                    name="password"
                                    onChange={onChangeHandler}
                                    value={data.password}
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </>
                        )}
                        <button type="submit">
                            {isAdmin ? 'Login' : currState === 'Login' ? 'Login' : 'Create account'}
                        </button>
                    </form>
                    {!isAdmin && (
                        <div className="login-popup-condition">
                            <input type="checkbox" required />
                            <p>By continuing, I agree to the terms of use & privacy policy.</p>
                        </div>
                    )}
                    {!isAdmin &&
                        (currState === 'Login' ? (
                            <p>
                                Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span>
                            </p>
                        ) : (
                            <p>
                                Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
                            </p>
                        ))}
                    <div className="login-role-buttons">
                        <button type="button" className="role-btn" onClick={() => setLocalIsAdmin(false)}>
                            User Login
                        </button>
                        <button type="button" className="role-btn" onClick={() => setLocalIsAdmin(true)}>
                            Admin Login
                        </button>
                    </div>
                </div>
                <div className="login-image-section">
                    <div className="food-carousel">
                        <div className="carousel-content">
                            <h3>Welcome to Tamil Arusuvai</h3>
                            <p>Discover authentic South Indian flavors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
