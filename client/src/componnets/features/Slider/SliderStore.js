import React from 'react';
import './sliderStore.css';

const SliderStore = () => {
    return (
        <div className="div" >
          
            <div class="carousel-wrapper">
                <div class="carousel" data-flickity>
                    <div class="carousel-cell" >
                        <h3>Casual Dress</h3>
                        <a class="more" href="#">21/02/2021</a>
                        <img src="./archive-newsletter-vector.jpg" style={{width:"100px"}}></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell" className="">
                        <h3>Hoodie</h3>
                        <a class="more" href="#">14/04/2021</a>
                        <img src="./archive-newsletter-vector.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>T-shirt</h3>
                        <a class="more" href="#">16/05/2021</a>
                        <img src="./archive-newsletter-vector.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Casual Dress 2</h3>
                        <a class="more" href="#">27/03/2021</a>
                        <img src="./archive-newsletter-vector.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Casual Dress 3</h3>
                        <a class="more" href="#">14/08/2021</a>
                        <img src="./archive-newsletter-vector.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Casual Dress 3</h3>
                        <a class="more" href="#">14/03/2021</a>
                        <img src="./archive-newsletter-vector.jpg"></img>
                        <div class="line"></div>
                    </div>
                    <div class="carousel-cell">
                        <h3>Casual Dress 4</h3>
                        <a class="more" href="#">14/05/2021</a>
                        <img src="./archive-newsletter-vector.jpg"></img>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderStore;

