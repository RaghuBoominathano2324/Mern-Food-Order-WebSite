// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { toast } from 'react-toastify';
// // import axios from 'axios';

// // const Add = () => {
// //   const [image, setImage] = useState(false);
// //   const [data, setData] = useState({
// //     name: "",
// //     description: "",
// //     price: "",
// //     category: "Salad"
// //   });

// //   const onSubmitHandler = async (event) => {
// //     event.preventDefault();

// //     if (!image) {
// //       toast.error('Please select an image');
// //       return null;
// //     }

// //     const formData = new FormData();
// //     formData.append("name", data.name);
// //     formData.append("description", data.description);
// //     formData.append("price", Number(data.price));
// //     formData.append("category", data.category);
// //     formData.append("image", image);

// //     try {
// //       const response = await axios.post(`${url}/api/food/add`, formData);
// //       if (response.data.success) {
// //         toast.success(response.data.message);
// //         setData({
// //           name: "",
// //           description: "",
// //           price: "",
// //           category: data.category
// //         });
// //         setImage(false);
// //       } else {
// //         toast.error(response.data.message);
// //       }
// //     } catch (error) {
// //       toast.error('Failed to add product');
// //     }
// //   };

// //   const onChangeHandler = (event) => {
// //     const { name, value } = event.target;
// //     setData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const categories = [
// //     "Salad", "Rolls", "Deserts", "Sandwich",
// //     "Cake", "Pure Veg", "Pasta", "Noodles"
// //   ];

// //   return (
// //     <div className="container py-5">
// //       <div className="row justify-content-center">
// //         <div className="col-lg-8">
// //           <div className="card shadow">
// //             <div className="card-header bg-primary text-white">
// //               <h4 className="mb-0">Add New Product</h4>
// //             </div>
// //             <div className="card-body">
// //               <form onSubmit={onSubmitHandler}>
// //                 {/* Image Upload Section */}
// //                 <div className="mb-4 text-center">
// //                   <label className="form-label">Upload Image</label>
// //                   <div className="d-flex justify-content-center">
// //                     <div className="position-relative" style={{ width: '200px', height: '200px' }}>
// //                       <input
// //                         type="file"
// //                         className="d-none"
// //                         id="image"
// //                         accept="image/*"
// //                         onChange={(e) => {
// //                           setImage(e.target.files[0]);
// //                           e.target.value = '';
// //                         }}
// //                       />
// //                       <label htmlFor="image" className="w-100 h-100 cursor-pointer">
// //                         <img
// //                           src={!image ? assets.upload_area : URL.createObjectURL(image)}
// //                           alt="Upload Area"
// //                           className="img-fluid border rounded"
// //                           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //                         />
// //                       </label>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Product Details */}
// //                 <div className="row g-3">
// //                   <div className="col-md-6">
// //                     <div className="form-group">
// //                       <label className="form-label">Product Name</label>
// //                       <input
// //                         type="text"
// //                         className="form-control"
// //                         name="name"
// //                         value={data.name}
// //                         onChange={onChangeHandler}
// //                         placeholder="Enter product name"
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="col-md-6">
// //                     <div className="form-group">
// //                       <label className="form-label">Price</label>
// //                       <div className="input-group">
// //                         <span className="input-group-text">$</span>
// //                         <input
// //                           type="number"
// //                           className="form-control"
// //                           name="price"
// //                           value={data.price}
// //                           onChange={onChangeHandler}
// //                           placeholder="0.00"
// //                           required
// //                         />
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="col-12">
// //                     <div className="form-group">
// //                       <label className="form-label">Description</label>
// //                       <textarea
// //                         className="form-control"
// //                         name="description"
// //                         value={data.description}
// //                         onChange={onChangeHandler}
// //                         rows="4"
// //                         placeholder="Enter product description"
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="col-md-6">
// //                     <div className="form-group">
// //                       <label className="form-label">Category</label>
// //                       <select
// //                         className="form-select"
// //                         name="category"
// //                         value={data.category}
// //                         onChange={onChangeHandler}
// //                       >
// //                         {categories.map((category) => (
// //                           <option key={category} value={category}>
// //                             {category}
// //                           </option>
// //                         ))}
// //                       </select>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="text-center mt-4">
// //                   <button type="submit" className="btn btn-primary px-5">
// //                     Add Product
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Add;
// import React, { useState } from 'react'
// import './Add.css'
// import { assets, url } from '../../assets/assets';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Add = () => {


//     const [image, setImage] = useState(false);
//     const [data, setData] = useState({
//         name: "",
//         description: "",
//         price: "",
//         category: "Salad"
//     });

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();

//         if (!image) {
//             toast.error('Image not selected');
//             return null;
//         }

//         const formData = new FormData();
//         formData.append("name", data.name);
//         formData.append("description", data.description);
//         formData.append("price", Number(data.price));
//         formData.append("category", data.category);
//         formData.append("image", image);
//         const response = await axios.post(`${url}/api/food/add`, formData);
//         if (response.data.success) {
//             toast.success(response.data.message)
//             setData({
//                 name: "",
//                 description: "",
//                 price: "",
//                 category: data.category
//             })
//             setImage(false);
//         }
//         else {
//             toast.error(response.data.message)
//         }
//     }

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }))
//     }

//     return (
//         <div className='add'>
//             <form className='flex-col' onSubmit={onSubmitHandler}>
//                 <div className='add-img-upload flex-col'>
//                     <p>Upload image</p>
//                     <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
//                     <label htmlFor="image">
//                         <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
//                     </label>
//                 </div>
//                 <div className='add-product-name flex-col'>
//                     <p>Product name</p>
//                     <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
//                 </div>
//                 <div className='add-product-description flex-col'>
//                     <p>Product description</p>
//                     <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required />
//                 </div>
//                 <div className='add-category-price'>
//                     <div className='add-category flex-col'>
//                         <p>Product category</p>
//                         <select name='category' onChange={onChangeHandler} >
//                             <option value="Salad">Salad</option>
//                             <option value="Rolls">Rolls</option>
//                             <option value="Deserts">Deserts</option>
//                             <option value="Sandwich">Sandwich</option>
//                             <option value="Cake">Cake</option>
//                             <option value="Pure Veg">Pure Veg</option>
//                             <option value="Pasta">Pasta</option>
//                             <option value="Noodles">Noodles</option>
//                         </select>
//                     </div>
//                     <div className='add-price flex-col'>
//                         <p>Product Price</p>
//                         <input type="Number" name='price' onChange={onChangeHandler} value={data.price} placeholder='25' />
//                     </div>
//                 </div>
//                 <button type='submit' className='add-btn' >ADD</button>
//             </form>
//         </div>
//     )
// }

// export default Add
import React, { useState } from 'react';
import './Add.css';
import { assets, url } from '../../admin_assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad',
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error('Image not selected');
      return null;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        name: '',
        description: '',
        price: '',
        category: data.category,
      });
      setImage(false);
    } else {
      toast.error(response.data.message);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className='add-container'>
      <form className='add-form' onSubmit={onSubmitHandler}>
        <div className='form-section image-upload'>
          <label htmlFor='image' className='image-label'>
            <p className='section-title'>Upload Image</p>
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt='Upload Preview'
              className='upload-preview'
            />
          </label>
          <input
            type='file'
            accept='image/*'
            id='image'
            hidden
            onChange={(e) => {
              setImage(e.target.files[0]);
              e.target.value = '';
            }}
          />
        </div>

        <div className='form-section'>
          <label htmlFor='name' className='input-label'>Product Name</label>
          <input
            id='name'
            name='name'
            type='text'
            className='input-field'
            placeholder='Type here'
            value={data.name}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className='form-section'>
          <label htmlFor='description' className='input-label'>Product Description</label>
          <textarea
            id='description'
            name='description'
            rows={5}
            className='input-field textarea-field'
            placeholder='Write content here'
            value={data.description}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className='form-row'>
          <div className='form-section'>
            <label htmlFor='category' className='input-label'>Product Category</label>
            <select
              id='category'
              name='category'
              className='select-field'
              value={data.category}
              onChange={onChangeHandler}
            >
            <option value='Salad'>Salad</option>
    <option value='Rolls'>Rolls</option>
    <option value='Deserts'>Deserts</option>
    <option value='Sandwich'>Sandwich</option>
    <option value='Cake'>Cake</option>
    <option value='Pure Veg'>Pure Veg</option>
    <option value='Pasta'>Pasta</option>
    <option value='Noodles'>Noodles</option>
    <option value='Dim Sum'>Dim Sum</option>
    <option value='Spring Rolls'>Spring Rolls</option>
    <option value='Biryani'>Biryani</option>
    <option value='Sushi'>Sushi</option>
    <option value='Ramen'>Ramen</option>
    <option value='Samosa'>Samosa</option>
    <option value='Pakora'>Pakora</option>
    <option value='Jalebi'>Jalebi</option>
    <option value='Gulab Jamun'>Gulab Jamun</option>
    <option value='Mochi'>Mochi</option>
    <option value='Peda'>Peda</option>
    <option value='Laddu'>Laddu</option>
    <option value='Paneer Tikka'>Paneer Tikka</option>
            </select>
          </div>

          <div className='form-section'>
            <label htmlFor='price' className='input-label'>Product Price</label>
            <input
              id='price'
              name='price'
              type='number'
              className='input-field'
              placeholder='25'
              value={data.price}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <button type='submit' className='submit-btn'>Add Product</button>
      </form>
    </div>
  );
};

export default Add;
