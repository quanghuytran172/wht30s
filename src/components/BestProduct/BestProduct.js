import React from "react";
import BestImage_01 from "../../assets/img/BestImage_01.png";
import BestImage_02 from "../../assets/img/BestImage_02.png";
import BestImage_03 from "../../assets/img/BestImage_03.png";

const BestProduct = () => {
    const bestProducts = [
        {
            id: 1,
            productImage: BestImage_01,
            description: "How to create mobile-optimized",
            linkTo: "#!",
        },
        {
            id: 2,
            productImage: BestImage_02,
            description: "How to create mobile-optimized",
            linkTo: "#!",
        },
        {
            id: 3,
            productImage: BestImage_03,
            description: "How to create mobile-optimized",
            linkTo: "#!",
        },
    ];
    return (
        <div className='best-product'>
            <div className='main-container'>
                <div className='best-product__header'>
                    <h1>BEST PRODUCT</h1>
                    <p>
                        How to create mobile-optimized videos in minutes. Not a
                        designer, every team makes a lot of videos Can be
                        trimmed. Take the first
                    </p>
                </div>

                <div className='best-product__bottom'>
                    {bestProducts.map((product, index) => (
                        <div
                            className='bProduct-item'
                            key={index}
                            style={{
                                backgroundImage: `url(${product.productImage})`,
                            }}
                        >
                            <div className='circle-number'>
                                <span>0{index + 1}</span>
                            </div>

                            <div className='wrapped-content'>
                                <div className='bProduct-item__content'>
                                    <h5>{product.description}</h5>
                                    <span>
                                        <a href={product.linkTo}>GO</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestProduct;
