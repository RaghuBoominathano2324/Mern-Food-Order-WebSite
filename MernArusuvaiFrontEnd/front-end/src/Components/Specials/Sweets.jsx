import { useState } from 'react';
import { menu_list } from '../../assets/assests_Main';
import FoodDisplay from '../FoodDisplay/FoodDisplay';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Cat/Traditional.css';

const Sweets = () => {
    const [selectedCategory, setSelectedCategory] = useState("Sweets");
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const specialsData = menu_list.find(item => item.category === "Specials");
    const sweetsItems = menu_list.find(item => 
        item.category === "Specials" && 
        item.menus.some(menu => menu.subcategories.includes("Sweets"))
    )?.menus[0]?.items || [];

    const sweets = [
        {
            name: 'Gulab Jamun',
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/gulab-jamun-recipe-500x500.jpg',
            description: 'Soft milk-solid-based sweet dumplings soaked in sugar syrup'
        },
        {
            name: 'Rasgulla',
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/rasgulla-recipe.jpg',
            description: 'Spongy milk curd balls soaked in light sugar syrup'
        },
        {
            name: 'Jalebi',
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/jalebi-recipe.jpg',
            description: 'Crispy, pretzel-shaped sweets soaked in saffron syrup'
        },
        {
            name: 'Kaju Katli',
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/10/kaju-katli-recipe.jpg',
            description: 'Diamond-shaped cashew fudge with silver coating'
        }
    ];

    const handleMenuClick = (menuName) => {
        setSelectedCategory(menuName);
    };

    const filteredItems = sweetsItems.filter(item => item.category === selectedCategory);

    return (
        <>
            <div className="traditional-section container mt-5 pt-5">
                <h2 className="text-center mb-4">Sweet Delights</h2>

                <div className="indian-sweets-carousel mb-5">
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        selectedItem={currentSlide}
                        onChange={setCurrentSlide}
                    >
                        {sweets.map((sweet, index) => (
                            <div key={index} className="sweet-slide">
                                <img src={sweet.image} alt={sweet.name} />
                                <div className="sweet-info">
                                    <h3>{sweet.name}</h3>
                                    <p>{sweet.description}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="row mt-5">
                    {filteredItems.map((item, index) => (
                        <div className="col-md-3 mb-4" key={`card-${index}`}>
                            <div 
                                className={`card menu-card ${selectedCategory === item.name ? 'active' : ''}`}
                                onClick={() => handleMenuClick(item.name)}
                            >
                                <img 
                                    src={item.image || specialsData.menus[0].menu_image}
                                    className="card-img-top"
                                    alt={item.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.name}</h5>
                                    <p className="text-center">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FoodDisplay category={selectedCategory} />
        </>
    );
};

export default Sweets;