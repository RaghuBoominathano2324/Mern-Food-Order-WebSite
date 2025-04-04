import React, { useEffect, useState } from 'react'
import './List.css'
import { url, currency } from '../../admin_assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {
      id: foodId
    })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p className='cursor' onClick={() => removeFood(item._id)}>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
// import api from '../../../../services/api.js';
// import React, { useEffect, useState } from 'react';
// import './List.css';
// import { url, currency } from '../../admin_assets/assets';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const List = () => {
//   const [list, setList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   // const fetchList = async () => {
//   //   try {
//   //     setIsLoading(true);
//   //     const response = await axios.get(`http://localhost:4000/api/food/list`);
//   //     if (response.data.success) {
//   //       setList(response.data.data);
//   //     }
//   //   } catch (error) {
//   //     toast.error("Failed to fetch food items");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };
//   const fetchList = async () => {
//     try {
//       const response = await api.get('/food/list');
//       if (response.data.success) {
//         setList(response.data.data);
//       }
//     } catch (error) {
//       toast.error("Failed to fetch food items");
//     }
//   };




//   const removeFood = async (foodId, foodName) => {
//     if (window.confirm(`Are you sure you want to remove ${foodName}?`)) {
//       try {
//         const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
//         if (response.data.success) {
//           toast.success(response.data.message);
//           await fetchList();
//         }
//       } catch (error) {
//         toast.error("Failed to remove food item");
//       }
//     }
//   };

//   const filteredList = list.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <div className='food-list-container'>
//       <header className='list-header'>
//         <h2>Food Items Management</h2>
//         <div className='list-actions'>
//           <input
//             type="text"
//             placeholder="Search foods..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className='search-input'
//           />
//           <button onClick={fetchList} className='refresh-button'>
//             Refresh List
//           </button>
//         </div>
//       </header>

//       {isLoading ? (
//         <div className="loading-state">Loading food items...</div>
//       ) : (
//         <div className='list-content'>
//           <div className="list-table">
//             <div className="table-header">
//               <div className="header-cell">Image</div>
//               <div className="header-cell">Name</div>
//               <div className="header-cell">Category</div>
//               <div className="header-cell">Price</div>
//               <div className="header-cell">Actions</div>
//             </div>

//             <div className="table-body">
//               {filteredList.map((item) => (
//                 <div key={item._id} className='table-row'>
//                   <div className="table-cell">
//                     <img 
//                       src={`${url}/images/${item.image}`} 
//                       alt={item.name}
//                       className="food-image"
//                     />
//                   </div>
//                   <div className="table-cell">{item.name}</div>
//                   <div className="table-cell">
//                     <span className="category-badge">{item.category}</span>
//                   </div>
//                   <div className="table-cell price">
//                     {currency}{item.price.toFixed(2)}
//                   </div>
//                   <div className="table-cell actions">
//                     <button 
//                       className="delete-btn"
//                       onClick={() => removeFood(item._id, item.name)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {filteredList.length === 0 && (
//             <div className="no-results">
//               No food items found matching your search.
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default List;
