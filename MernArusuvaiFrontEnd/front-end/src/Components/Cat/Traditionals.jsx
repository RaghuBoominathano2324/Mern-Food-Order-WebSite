import { useState } from 'react';
import { menu_list } from '../../assets/assests_Main';
import FoodDisplay from '../FoodDisplay/FoodDisplay';
import './Traditional.css';

const Traditionals = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentSlide, setCurrentSlide] = useState(0);
    const traditionalMenus = menu_list.find(item => item.category === "Traditional")?.menus || [];

    const handleMenuClick = (menuName) => {
        setSelectedCategory(menuName);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => 
            prev === traditionalMenus.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => 
            prev === 0 ? traditionalMenus.length - 1 : prev - 1
        );
    };

    return (
        <>
            <div className="traditional-section container mt-5 pt-5">
                <h2 className="text-center mb-4">Traditional Selection</h2>

                <div className="carousel-container">
                    <button className="carousel-btn prev" onClick={prevSlide}>
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <div className="carousel-wrapper">
                        <div 
                            className="carousel-track" 
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {traditionalMenus.map((item, index) => (
                                <div 
                                    className="carousel-slide" 
                                    key={`slide-${index}`}
                                    onClick={() => handleMenuClick(item.menu_name)}
                                >
                                    <div className={`menu-card ${selectedCategory === item.menu_name ? 'active' : ''}`}>
                                        <div className="menu-image-wrapper">
                                            <img
                                                src={item.menu_image}
                                                alt={item.menu_name}
                                            />
                                        </div>
                                        <h3 className="menu-title">{item.menu_name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="carousel-btn next" onClick={nextSlide}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div className="carousel-indicators">
                    {traditionalMenus.map((_, index) => (
                        <button
                            key={`indicator-${index}`}
                            className={`indicator ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
            <FoodDisplay category={selectedCategory} />
        </>
    );
};

export default Traditionals;
