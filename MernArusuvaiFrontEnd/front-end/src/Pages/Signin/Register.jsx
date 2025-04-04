// import React, { useState, useContext } from 'react';
// import './Register.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { GlobalContext } from '../Context/Globalstate';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//    const navigate = useNavigate();
  
//   const { setUsers } = useContext(GlobalContext);
//   const [darkMode, setDarkMode] = useState(false); // State for dark mode

//   const [user, setUser] = useState({
//     firstname: '',
//     lastname: '',
//     age: '',
//     email: '',
//     password: '',
//     confirmpassword: '',
//     contact: '',
//     flatno: '',
//     area: '',
//     pincode: '',
//     landmark: '',
//     towncity: '',
//     state: '',
//     country: '',
//     addaddress: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!user.firstname) newErrors.firstname = 'First name is required';
//     if (!user.lastname) newErrors.lastname = 'Last name is required';
//     if (!user.age) newErrors.age = 'Age is required';
//     if (!user.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(user.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!user.password || user.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters long';
//     }
//     if (user.password !== user.confirmpassword) {
//       newErrors.confirmpassword = 'Passwords do not match';
//     }if(!user.contact)newErrors.contact=' enter the 10 number';
//     if(!user.flatno)newErrors.flatno=' enter the flat number required';
//     if(!user.area)newErrors.area=' enter the required in area name';
//     if(!user.pincode)newErrors.pincode='enter the proper pincode'
//     if(!user.landmark)newErrors.landmark=' please enter the landmark';
//     if(!user.towncity)newErrors.towncity=' please enter the tower city';
//     if(!user.state)newErrors.state=' please enter the State';
//     if(!user.country)newErrors.country=' please enter the country';



//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
//   // http://localhost:5000
//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       axios.post('https://final-project-7f4r.onrender.com/app/signup', user)
//         .then((response) => {
//           alert('Registered successfully');
//           navigate('/Register'); // Navigate to Register page
     
//           setUser({
//             firstname: '',
//             lastname: '',
//             age: '',
//             email: '',
//             password: '',
//             confirmpassword: '',
//             contact: '',
//             flatno: '',
//             area: '',
//             pincode: '',
//             landmark: '',
//             towncity: '',
//             state: '',
//             country: '',
//             addaddress: ''
//           });
//         })
//         .catch((error) => {
//           console.error("There was an error registering!", error);
//         });
//     }
//   };

//   const toggleMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={Register}>
//       <div className="Register_container">
//         <button onClick={toggleMode} className="toggle-mode-btn">
//           {darkMode ? 'Light Mode' : 'Dark Mode'}
//         </button>
//         <div className="Register_formContainer">
//           <h1 className="Register_title">REGISTER</h1>
//           <form onSubmit={handleAdd}>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="firstname"
//                 placeholder="First Name"
//                 value={user.firstname}
//                 onChange={handleChange}
//               />
//               {errors.firstname && <span className="error">{errors.firstname}</span>}


 
//               <input
//               type="text"
//               name="lastname"
//               placeholder="Enter Lastname Here"
//               value={user.lastname}
//               onChange={handleChange}
//             />
//             {errors.lastname && <span className="error">{errors.lastname}</span>}

//             <input
//               type="number"
//               name="age"
//               placeholder="Enter Age Here"
//               value={user.age}
//               onChange={handleChange}
//             />
//             {errors.age && <span className="error">{errors.age}</span>}

//             <input
//               type="text"
//               name="email"
//               placeholder="Enter Email Here"
//               value={user.email}
//               onChange={handleChange}
//             />
//             {errors.email && <span className="error">{errors.email}</span>}

//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password Here"
//               value={user.password}
//               onChange={handleChange}
//             />
//             {errors.password && <span className="error">{errors.password}</span>}

//             <input
//               type="password"
//               name="confirmpassword"
//               placeholder="Confirm Password Here"
//               value={user.confirmpassword}
//               onChange={handleChange}
//             />
//             {errors.confirmpassword && <span className="error">{errors.confirmpassword}</span>}

//             <input
//               type="number"
//               name="contact"
//               placeholder="Enter Contact Here"
//               value={user.contact}
//               onChange={handleChange}
//             />
//             {errors.contact && <span className="error">{errors.contact}</span>}

//             <input
//               type="text"
//               name="flatno"
//               placeholder="Enter Flat No Here"
//               value={user.flatno}
//               onChange={handleChange}
//             />
//             {errors.flatno && <span className="error">{errors.flatno}</span>}

//             <input
//               type="text"
//               name="area"
//               placeholder="Enter Area Name Here"
//               value={user.area}
//               onChange={handleChange}
//             />
//             {errors.area && <span className="error">{errors.area}</span>}

//             <input
//               type="number"
//               name="pincode"
//               placeholder="Enter Pincode Here"
//               value={user.pincode}
//               onChange={handleChange}
//             />
//             {errors.pincode && <span className="error">{errors.pincode}</span>}

//             <input
//               type="text"
//               name="landmark"
//               placeholder="Enter Landmark Here"
//               value={user.landmark}
//               onChange={handleChange}
//             />
//             {errors.landmark && <span className="error">{errors.landmark}</span>}

//             <input
//               type="text"
//               name="towncity"
//               placeholder="Enter Town/City Here"
//               value={user.towncity}
//               onChange={handleChange}
//             />
//             {errors.towncity && <span className="error">{errors.towncity}</span>}

//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State Here"
//               value={user.state}
//               onChange={handleChange}
//             />
//             {errors.state && <span className="error">{errors.state}</span>}

//             <input
//               type="text"
//               name="country"
//               placeholder="Enter Country Here"
//               value={user.country}
//               onChange={handleChange}
//             />
//             {errors.country && <span className="error">{errors.country}</span>}

//             <input
//                 type="text"
//                 name="addaddress"
//                 placeholder="Enter Address Details Here"
//                 value={user.addaddress}
//                 onChange={handleChange}
//              />
//              {errors.addaddress && <span className="error">{errors.addaddress}</span>}
            



//             </div>
//             {/* Add other inputs similarly */}
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState, useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalContext from '../Context/Globalstate';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { setFormDatas } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    RegisterDate: "",
    outDate: "",
    checkIn: "",
    checkOut: "",
  });

  const [profiles, setProfiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      tempErrors.email = "Email is not valid.";
    if (!formData.contactNumber.trim()) tempErrors.contactNumber = "Contact number is required.";
    else if (!/^\d{10}$/.test(formData.contactNumber))
      tempErrors.contactNumber = "Contact number must be 10 digits.";
    if (!formData.RegisterDate) tempErrors.RegisterDate = "Register date is required.";
    if (!formData.outDate) tempErrors.outDate = "Out date is required.";
    if (!formData.checkIn) tempErrors.checkIn = "Check-in time is required.";
    if (!formData.checkOut) tempErrors.checkOut = "Check-out time is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('https://final-project-7f4r.onrender.com/Register/signup1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Registered successfully');
          navigate('/Login'); // Navigate to Register page
     
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contactNumber: "",
            RegisterDate: "",
            outDate: "",
            checkIn: "",
            checkOut: "",
         
          });
          
        } else {
          console.error("Error during registration:", response.statusText);
          alert("Failed to register. Please try again.");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className= {darkMode ? 'light-mode' : 'dark-mode' }>
      <div className="theme-toggle">
        <button className="btn-btn-primary" onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }} className="Register">
        <h2>ROOM RESERVATION</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <label>Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            {errors.contactNumber && (
              <p style={{ color: "red" }}>{errors.contactNumber}</p>
            )}
          </div>
          <div>
            <label>Register Date:</label>
            <input
              type="date"
              name="RegisterDate"
              value={formData.RegisterDate}
              onChange={handleChange}
            />
            {errors.RegisterDate && <p style={{ color: "red" }}>{errors.RegisterDate}</p>}
          </div>
          <div>
            <label>OutDate:</label>
            <input
              type="date"
              name="outDate"
              value={formData.outDate}
              onChange={handleChange}
            />
            {errors.outDate && <p style={{ color: "red" }}>{errors.outDate}</p>}
          </div>
          <div>
            <label>Check-In Time:</label>
            <input
              type="time"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
            />
            {errors.checkIn && <p style={{ color: "red" }}>{errors.checkIn}</p>}
          </div>
          <div>
            <label>Check-Out Time:</label>
            <input
              type="time"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
            />
            {errors.checkOut && <p style={{ color: "red" }}>{errors.checkOut}</p>}
          </div>
          <button  className=' btn btn-secondary'type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;