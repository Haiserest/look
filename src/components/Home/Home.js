import React from 'react'
import './Home.css';

function PageHome(){
    return(
        <div className='container-home'>
            
            <div className="container-banner">
                <div className="banner">
                    <img className='image-banner' src='images/banner.png' />
                    <div className="item-banner">
                        <h1 >WEB</h1>
                        <p className="text-banner">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                        <div className="btn-banner">
                            <a className="btn" href="/coming-soon">Coming soon</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-slide'>
                <div class="slideshow middle">
                    <div class="slides">
                        <input type="radio" name="radioInput" id="r1" />
                        <input type="radio" name="radioInput" id="r2" />
                        <input type="radio" name="radioInput" id="r3" />
                        <input type="radio" name="radioInput" id="r4" />
                        <div class="slide img1">
                            <img src="images/greentea.jpg" />
                        </div>
                        <div class="slide img2">
                            <img src="images/mucha.jpg" />
                        </div>
                        <div class="slide img3">
                            <img src="images/dong.jpg" />
                        </div>
                        <div class="slide img3">
                            <img src="images/italian.jpg" />
                        </div>
                    </div>

                    <div class="navigation">
                        <label for="r1" class="bar"></label>
                        <label for="r2" class="bar"></label>
                        <label for="r3" class="bar"></label>
                        <label for="r4" class="bar"></label>
                    </div>
                </div>
            </div>

            

        </div>
    );
}

export default PageHome;