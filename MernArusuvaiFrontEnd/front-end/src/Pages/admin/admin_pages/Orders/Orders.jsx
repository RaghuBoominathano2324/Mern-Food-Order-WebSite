// import React, { useEffect, useState } from 'react'
// import './Orders.css'
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { assets, url, currency } from '../../assets/assets';

// const Order = () => {

//   const [orders, setOrders] = useState([]);

//   const fetchAllOrders = async () => {
//     const response = await axios.get(`${url}/api/order/list`)
//     if (response.data.success) {
//       setOrders(response.data.data.reverse());
//     }
//     else {
//       toast.error("Error")
//     }
//   }

//   const statusHandler = async (event, orderId) => {
//     console.log(event, orderId);
//     const response = await axios.post(`${url}/api/order/status`, {
//       orderId,
//       status: event.target.value
//     })
//     if (response.data.success) {
//       await fetchAllOrders();
//     }
//   }


//   useEffect(() => {
//     fetchAllOrders();
//   }, [])

//   return (
//     <div className='order add'>
//       <h3>Order Page</h3>
//       <div className="order-list">
//         {orders.map((order, index) => (
//           <div key={index} className='order-item'>
//             <img src={assets.parcel_icon} alt="" />
//             <div>
//               <p className='order-item-food'>
//                 {order.items.map((item, index) => {
//                   if (index === order.items.length - 1) {
//                     return item.name + " x " + item.quantity
//                   }
//                   else {
//                     return item.name + " x " + item.quantity + ", "
//                   }
//                 })}
//               </p>
//               <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
//               <div className='order-item-address'>
//                 <p>{order.address.street + ","}</p>
//                 <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
//               </div>
//               <p className='order-item-phone'>{order.address.phone}</p>
//             </div>
//             <p>Items : {order.items.length}</p>
//             <p>{currency}{order.amount}</p>
//             <select onChange={(e) => statusHandler(e, order._id)} value={order.status} name="" id="">
//               <option value="Food Processing">Food Processing</option>
//               <option value="Out for delivery">Out for delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Order

import React, { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets, url, currency } from '../../admin_assets/assets';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllOrders = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data.reverse());
      }
    } catch (error) {
      toast.error("Failed to fetch orders");
    } finally {
      setIsLoading(false);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value
      });
      if (response.data.success) {
        toast.success("Order status updated successfully");
        await fetchAllOrders();
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='orders-container'>
      <header className='orders-header'>
        <h2>Order Management</h2>
        <button onClick={fetchAllOrders} className="refresh-btn">
          Refresh Orders
        </button>
      </header>

      {isLoading ? (
        <div className="loading-spinner">Loading orders...</div>
      ) : (
        <div className="orders-grid">
          {orders.map((order, index) => (
            <div key={index} className='order-card'>
              <div className="order-header">
                <img src={assets.parcel_icon} alt="Order" className="order-icon" />
                <span className="order-number">Order #{order._id.slice(-6)}</span>
              </div>

              <div className="order-content">
                <div className="order-items">
                  <h4>Items Ordered:</h4>
                  {order.items.map((item, idx) => (
                    <div key={idx} className="item-row">
                      <span>{item.name}</span>
                      <span className="quantity">x{item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="customer-details">
                  <h4>Customer Information:</h4>
                  <p className="customer-name">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p className="customer-address">
                    {order.address.street},
                    <br />
                    {order.address.city}, {order.address.state}
                    <br />
                    {order.address.country} - {order.address.zipcode}
                  </p>
                  <p className="customer-phone">📞 {order.address.phone}</p>
                </div>

                <div className="order-summary">
                  <div className="order-total">
                    <span>Total Amount:</span>
                    <span className="amount">{currency}{order.amount}</span>
                  </div>
                  <div className="order-items-count">
                    <span>Total Items:</span>
                    <span>{order.items.length}</span>
                  </div>
                </div>

                <div className="order-status">
                  <select 
                    onChange={(e) => statusHandler(e, order._id)} 
                    value={order.status}
                    className={`status-select status-${order.status.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <option value="Food Processing">Food Processing</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
