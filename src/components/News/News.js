import React from "react";
import obj1 from "../../assets/img/obj1.png";
import obj2 from "../../assets/img/obj2.png";

import NewsImg_01 from "../../assets/img/NewsImg_01.png";
import NewsImg_02 from "../../assets/img/NewsImg_02.png";
import NewsImg_03 from "../../assets/img/NewsImg_03.png";
import NewsImg_04 from "../../assets/img/NewsImg_04.png";
import NewsImg_05 from "../../assets/img/NewsImg_05.png";

import icon1 from "../../assets/img/News-icon.png";
import icon2 from "../../assets/img/news-icon2.png";

const News = () => {
    return (
        <div className='news'>
            <div className='main-container'>
                <div className='news__top'>
                    <h1>HAPPENED'S ISSUE</h1>
                    <p>
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                        디자이너가 아니더라도, 모든 팀에서
                        <br />
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을
                        내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </p>

                    <a href='#!' className='btn'>
                        SEE MORE
                    </a>
                </div>
            </div>

            <div className='news__images'>
                <div className='news__images-item'>
                    <img src={NewsImg_01} alt='' />
                    <img src={icon1} alt='' className='icon1' />
                </div>
                <div className='news__images-item'>
                    <img src={NewsImg_02} alt='' />
                    <div className='icon2'>
                        <span>HOT</span>
                    </div>
                </div>
                <div className='news__images-item'>
                    <img src={NewsImg_03} alt='' />
                </div>
                <div className='news__images-item'>
                    <img src={NewsImg_04} alt='' />
                </div>
                <div className='news__images-item'>
                    <img src={NewsImg_05} alt='' />
                    <img src={icon2} alt='' className='icon3' />
                </div>
            </div>

            <img src={obj1} className='obj1' alt='' />
            <img src={obj2} className='obj2' alt='' />
        </div>
    );
};

export default News;
