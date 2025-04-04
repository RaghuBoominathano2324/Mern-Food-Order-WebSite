// export default Add
import React, { useState } from 'react';
import './Add.css';
import { assets} from '../../assets/assets';
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
