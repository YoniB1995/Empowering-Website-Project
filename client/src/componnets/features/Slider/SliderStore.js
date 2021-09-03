import React from 'react';
import './sliderStore.css';

const SliderStore = () => {
    return (
        <div className="div" >
            <h1>החנות שלנו</h1>
            <div class="carousel-wrapper">
                <div class="carousel" data-flickity>
                    <div class="carousel-cell">
                        <h3>Casual Dress</h3>
                        <a class="more" href="#">Explore More</a>
                        <img src="Tshirt.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Hoodie</h3>
                        <a class="more" href="#">Explore More</a>
                        <img src="Tshirt.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>T-shirt</h3>
                        <a class="more" href="#">Explore More</a>
                        <img src="Tshirt.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Casual Dress 2</h3>
                        <a class="more" href="#">Explore More</a>
                        <img src="Tshirt.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Casual Dress 3</h3>
                        <a class="more" href="#">Explore More</a>
                        <img src="Tshirt.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Casual Dress 3</h3>
                        <a class="more" href="#">Explore More</a>
                        <img src="Tshirt.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Casual Dress 4</h3>
                        <a class="more" href="#">Explore More</a>
                        <img src="Tshirt.jpg"></img>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SliderStore;

