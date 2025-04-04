// // import React from 'react'
// // import  './Sidebar.css'
// // import { assets } from '../../assets/assets'
// // import { NavLink } from 'react-router-dom'

// // const Sidebar = () => {
// //   return (
// //     <div className='sidebar'>
// //       <div className="sidebar-options">
// //         <NavLink to='/add' className="sidebar-option">
// //             <img src={assets.add_icon} alt="" />
// //             <p>Add Items</p>
// //         </NavLink>
// //         <NavLink to='/list' className="sidebar-option">
// //             <img src={assets.order_icon} alt="" />
// //             <p>List Items</p>
// //         </NavLink>
// //         <NavLink to='/orders' className="sidebar-option">
// //             <img src={assets.order_icon} alt="" />
// //             <p>Orders</p>
// //         </NavLink>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Sidebar
// import React, { useState } from 'react';
// import './Sidebar.css';
// import { assets } from '../../assets/assets';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
//       <div className="sidebar-header">
//         <img src={assets.logo} alt="Logo" className="sidebar-logo" />
//         <button className="collapse-btn" onClick={toggleCollapse}>
//           {isCollapsed ? '>' : '<'}
//         </button>
//       </div>

//       <div className="sidebar-options">
//         <NavLink to='/add' className="sidebar-option" activeClassName="active">
//           <img src={assets.add_icon} alt="Add Items" className="sidebar-icon" />
//           <p className="sidebar-label">Add Items</p>
//         </NavLink>
//         <NavLink to='/list' className="sidebar-option" activeClassName="active">
//           <img src={assets.list_icon} alt="List Items" className="sidebar-icon" />
//           <p className="sidebar-label">List Items</p>
//         </NavLink>
//         <NavLink to='/orders' className="sidebar-option" activeClassName="active">
//           <img src={assets.order_icon} alt="Orders" className="sidebar-icon" />
//           <p className="sidebar-label">Orders</p>
//         </NavLink>
//         <NavLink to='/reports' className="sidebar-option" activeClassName="active">
//           <img src={assets.report_icon} alt="Reports" className="sidebar-icon" />
//           <p className="sidebar-label">Reports</p>
//         </NavLink>
//         <NavLink to='/settings' className="sidebar-option" activeClassName="active">
//           <img src={assets.settings_icon} alt="Settings" className="sidebar-icon" />
//           <p className="sidebar-label">Settings</p>
//         </NavLink>
//       </div>

//       <div className="sidebar-footer">
//         <NavLink to='/profile' className="sidebar-option" activeClassName="active">
//           <img src={assets.profile_icon} alt="Profile" className="sidebar-icon" />
//           <p className="sidebar-label">Profile</p>
//         </NavLink>
//         <NavLink to='/logout' className="sidebar-option" activeClassName="active">
//           <img src={assets.logout_icon} alt="Logout" className="sidebar-icon" />
//           <p className="sidebar-label">Logout</p>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import './Sidebar.css';
// import { assets } from '../../assets/assets';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <>
//       {/* Burger Button */}
//       <button className="burger-button" onClick={toggleSidebar}>
//         <span className="burger-line"></span>
//         <span className="burger-line"></span>
//         <span className="burger-line"></span>
//       </button>

//       {/* Sidebar */}
//       <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
//         <div className="sidebar-header">
//           <img src={assets.logo} alt="Logo" className="sidebar-logo" />
//           <button className="collapse-btn" onClick={toggleSidebar}>
//             {isCollapsed ? '>' : '<'}
//           </button>
//         </div>

//         <div className="sidebar-options">
//           <NavLink to='/add' className="sidebar-option" activeClassName="active">
//             <img src={assets.add_icon} alt="Add Items" className="sidebar-icon" />
//             <p className="sidebar-label">Add Items</p>
//           </NavLink>
//           <NavLink to='/list' className="sidebar-option" activeClassName="active">
//             <img src={assets.list_icon} alt="List Items" className="sidebar-icon" />
//             <p className="sidebar-label">List Items</p>
//           </NavLink>
//           <NavLink to='/orders' className="sidebar-option" activeClassName="active">
//             <img src={assets.order_icon} alt="Orders" className="sidebar-icon" />
//             <p className="sidebar-label">Orders</p>
//           </NavLink>
//         </div>

//         <div className="sidebar-footer">
//           <NavLink to='/profile' className="sidebar-option" activeClassName="active">
//             <img src={assets.profile_icon} alt="Profile" className="sidebar-icon" />
//             <p className="sidebar-label">Profile</p>
//           </NavLink>
//           <NavLink to='/logout' className="sidebar-option" activeClassName="active">
//             <img src={assets.logout_icon} alt="Logout" className="sidebar-icon" />
//             <p className="sidebar-label">Logout</p>
//           </NavLink>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faList,
  faClipboardList,
  faUser,
  faSignOutAlt,
  faBars,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Burger Button */}
      <button className="burger-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">அறுசுவை</h2>
          <button className="collapse-btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isCollapsed ? faBars : faChevronLeft} />
          </button>
        </div>

        <div className="sidebar-options">
          <NavLink to='/add' className="sidebar-option" activeClassName="active">
            <FontAwesomeIcon icon={faPlus} className="sidebar-icon" />
            <p className="sidebar-label">Add Items</p>
          </NavLink>
          <NavLink to='/list' className="sidebar-option" activeClassName="active">
            <FontAwesomeIcon icon={faList} className="sidebar-icon" />
            <p className="sidebar-label">List Items</p>
          </NavLink>
          <NavLink to='/mordersrackers' className="sidebar-option" activeClassName="active">
            <FontAwesomeIcon icon={faClipboardList} className="sidebar-icon" />
            <p className="sidebar-label">Orders</p>
          </NavLink>
        </div>

        {/* <div className="sidebar-footer">
          <NavLink to='/profile' className="sidebar-option" activeClassName="active">
            <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
            <p className="sidebar-label">Profile</p>
          </NavLink>
          <NavLink to='/logout' className="sidebar-option" activeClassName="active">
            <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" />
            <p className="sidebar-label">Logout</p>
          </NavLink>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;

