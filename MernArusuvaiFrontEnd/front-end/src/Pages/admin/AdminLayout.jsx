import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import Sidebar from './admin_components/Sidebar/Sidebar'
import Add from './admin_pages/Add/Add'
import List from './admin_pages/List/List'
import Orders from './admin_pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminLayout = () => {
  return (
    <div className='app'>
    <ToastContainer />
    {/* <Navbar />z */}
    <hr />
    <div className="app-content">
      <Sidebar />
   <Add/>
     <List/>
    </div>
  </div>
  )
}

export default AdminLayout