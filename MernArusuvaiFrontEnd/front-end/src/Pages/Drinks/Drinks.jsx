import { useState } from 'react';
import { menu_list } from '../../assets/assets'; // Corrected import path
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import SoftDrinks from '../../Components/Drinks/SoftDrinks';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Others/Hero';
import './Catogeries.css'; // Fixed file name typo

const Drinks = () => {
    const [Category, setCategory] = useState("Soft Drinks"); // Fixed naming consistency
    const [currentSlide, setCurrentSlide] = useState(0);

    const drinksMenus = menu_list.find(item => item.category === "Drinks")?.menus || [];

    const handleMenuClick = (menuName) => {
        setCategory(menuName); // Corrected from setSelectedCategory to setCategory
    };

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === drinksMenus.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? drinksMenus.length - 1 : prev - 1
        );
    };

    return (
        <main className="categories-page">
            <Header />
            <div className="categories-container">
                <section id="soft" className="category-section">
                    <SoftDrinks 
                        Category={Category} // Corrected prop name
                        setCategory={setCategory} 
                    />
                    <FoodDisplay 
                        Category={Category} // Corrected prop name
                        setCategory={setCategory} 
                    />
                </section>
                <Hero />
            </div>
        </main>
    );
};

export default Drinks;
