import React, { useState } from 'react';
import './Catogeries.css';
import Traditional from '../../Components/Cat/Traditionals';
import FastFood from '../../Components/Cat/FastFood';
import Asian from '../../Components/Cat/Asian';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import Hero from '../../Components/Others/Hero';
import Header from '../../Components/Header/Header';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
const Categories = () => {
 // const [Catogeries,setCategory]=useState("North Indian");
  const [category,setCategory] = useState("All")
  return (

    <main className="categories-page">
      <Header/>
      <div className="categories-container">
        {/* <section id='trad' className="category-section">
          <Traditional  Categories={Categories} setCategory={setCategory} />
          <FoodDisplay Categories={Categories} setCategory={setCategory}/>

        </section>
        <section id='fast' className="category-section">
          <FastFood />
        </section>
        <section id='asian' className="category-section">
          <Asian />
        </section>
        */}
        

        <section id='asian' className="category-section">
        <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
 
        </section>

        <Hero />
      </div>
    </main>
  );
};

export default Categories;
