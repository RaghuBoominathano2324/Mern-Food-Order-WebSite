import React, { useState } from 'react';
import './Catogeries.css';
import Traditional from '../../Components/Cat/Traditionals';
import Baryanis from '../../Components/Cat/FastFood';
import Sweets from '../../Components/Cat/Asian';

import Hero from '../../Components/Others/Hero';
import Header from '../../Components/Header/Header';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
const Categories = () => {
  const [Catogeries,setCategory]=useState("All")
  return (
    <main className="categories-page">
      <Header/>
      <div className="categories-container">
        <section className="category-section">
          <Baryanis Categories={Categories} setCategory={setCategory}/>
          <FoodDisplay Categories={Categories} setCategory={setCategory}/>

        </section>
        <section id='sweets' className="category-section">
          <Sweets />
        </section>
        
       
        <Hero />
      </div>
    </main>
  );
};

export default Categories;
