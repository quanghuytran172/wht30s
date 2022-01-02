import React from "react";
import banner from "../../assets/img/banner.png";
import right_arrow from "../../assets/img/right-arrow.png";
const MainBanner = () => {
    return (
        <section className='main-banner'>
            <div className='main-container'>
                <h1>LAUNCHING OPEN EVENT!</h1>
                <img src={banner} className='main-banner__image' alt='' />
                <div className='main-banner__bottom'>
                    <a href='#!' className='btn-banner' type='button'>
                        LOREM IPSUM
                    </a>
                    <img src={right_arrow} alt='right_arrow' />
                    <a href='#!' className='btn-launching' type='button'>
                        MARKET LAUNCHING!
                    </a>
                    <img src={right_arrow} alt='right_arrow' />

                    <a href='#!' className='btn-banner' type='button'>
                        LOREM IPSUM
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MainBanner;
