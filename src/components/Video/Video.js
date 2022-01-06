import React from "react";
import vector from "../../assets/img/Vector_Smart.png";
import X from "../../assets/img/X.png";
import right_arrow from "../../assets/img/right_arrow-tiny.png";
import video_group from "../../assets/img/Group_61.png";
const Video = () => {
    return (
        <div className='video'>
            <div className='wrapper'>
                <div className='main-container'>
                    <div className='video__top'>
                        <h1>WHAT HAPPENED</h1>
                        <p>
                            How to create mobile-optimized videos in minutes.
                            Not a designer, every team makes a lot of videos Can
                            be trimmed. Take the first
                        </p>
                        <a href='#!' className='btn'>
                            SEE MORE
                        </a>
                    </div>

                    <div className='video__bottom'>
                        <div className='video-header'>
                            <img src={vector} alt='' className='vector' />
                            <h4>WHAT HAPPENED</h4>
                            <div className='bar'></div>
                            <img src={X} alt='' className='right_arrow' />
                        </div>
                        <div className='video-middle'>
                            <h5>WWW. WHPN.COM/BRANDSTORY</h5>
                            <img src={right_arrow} alt='' />
                        </div>

                        <div className='video-show'>
                            <img src={video_group} alt='' />
                            <div className='description'>
                                <h4>Happy</h4>
                                <h4>
                                    왓헤픈의 브랜드 스토리는 이렇게 만들어지고
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
