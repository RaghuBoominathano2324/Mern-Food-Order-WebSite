import { useState } from 'react';
import { menu_list } from '../../assets/assests_Main';
import FoodDisplay from '../FoodDisplay/FoodDisplay';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Cat/Traditional.css';

const Biryanis = () => {
    const [selectedCategory, setSelectedCategory] = useState("Biryanis");
    const [currentSlide, setCurrentSlide] = useState(0);

    // Retrieve the "Biryanis" data from the menu_list
    const specialsData = menu_list.find(item => item.category === "Specials");
    const biryanisMenu = specialsData?.menus?.find(menu =>
        menu.subcategories?.includes("Biryanis")
    );

    // Example biryanis data for the carousel
    const biryanis = [
        {
            name: 'Hyderabadi Biryani',
            image: 'https://example.com/hyderabadi-biryani.jpg',
            description: 'Aromatic rice layered with tender meat and spices',
            price: '₹299',
        },
        {
            name: 'Lucknowi Biryani',
            image: 'https://example.com/lucknowi-biryani.jpg',
            description: 'Fragrant rice cooked with mild spices and meat',
            price: '₹279',
        },
        {
            name: 'Kolkata Biryani',
            image: 'https://example.com/kolkata-biryani.jpg',
            description: 'Distinctive biryani with potato and eggs',
            price: '₹259',
        },
        {
            name: 'Malabar Biryani',
            image: 'https://example.com/malabar-biryani.jpg',
            description: 'Coastal style biryani with unique spice blend',
            price: '₹289',
        },
    ];

    // Simulated items for card display (Adjust dynamically based on menu_list)
    const filteredItems = biryanis.filter(item => item.name === selectedCategory);

    // Handle menu click
    const handleMenuClick = (menuName) => {
        setSelectedCategory(menuName);
    };

    return (
        <>
            <div className="traditional-section container mt-5 pt-5">
                <h2 className="text-center mb-4">Royal Biryanis</h2>

                {/* Carousel Section */}
                <div className="indian-sweets-carousel mb-5">
                    <Carousel
                        showArrows
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop
                        autoPlay
                        interval={3000}
                        selectedItem={currentSlide}
                        onChange={setCurrentSlide}
                        className="carousel-container"
                    >
                        {biryanis.map((biryani, index) => (
                            <div key={index} className="sweet-slide">
                                <img src={biryani.image} alt={biryani.name} className="carousel-image" />
                                <div className="sweet-info">
                                    <h3 className="sweet-title">{biryani.name}</h3>
                                    <p className="sweet-description">{biryani.description}</p>
                                    <p className="sweet-price">{biryani.price}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Biryani Cards Section */}
                <div className="row mt-5">
                    {biryanis.map((item, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div
                                className={`card menu-card ${selectedCategory === item.name ? 'active' : ''}`}
                                onClick={() => handleMenuClick(item.name)}
                            >
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.name}</h5>
                                    <p className="card-price text-center">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filtered Items Section */}
                <div className="row mt-5">
                    {filteredItems.map((item, index) => (
                        <div className="col-md-3 mb-4" key={`filtered-${index}`}>
                            <div className="card menu-card active">
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.name}</h5>
                                    <p className="card-price text-center">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Food Display Section */}
            <FoodDisplay category={selectedCategory} />
        </>
    );
};

export default Biryanis;
