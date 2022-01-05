import React from "react";
import product1 from "../../assets/img/product-img_01.png";
import product2 from "../../assets/img/product-img_02.png";
import product3 from "../../assets/img/product-img_03.png";
import product4 from "../../assets/img/product-img_04.png";
import product5 from "../../assets/img/product-img_05.png";

const Products = () => {
    return (
        <div className='main-container'>
            <div className='wrapped-product'>
                <div className='products'>
                    <div className='product-item'>
                        <img src={product1} alt='' />
                        <a href='#!'>
                            <p>[what happen] How to create </p>
                        </a>
                        <div className='product-item__bottom'>
                            <div className='product-item__price'>2,500 won</div>
                            <div className='product-item__love'>
                                <ion-icon name='heart-outline'></ion-icon>
                                <span>236</span>
                            </div>
                        </div>
                    </div>

                    <div className='product-item'>
                        <img src={product2} alt='' />
                        <a href='#!'>
                            <p>[what happen] How to create </p>
                        </a>
                        <div className='product-item__bottom'>
                            <div className='product-item__price'>2,500 won</div>
                            <div className='product-item__love'>
                                <ion-icon name='heart-outline'></ion-icon>
                                <span>236</span>
                            </div>
                        </div>
                    </div>

                    <div className='product-item'>
                        <img src={product3} alt='' />
                        <a href='#!'>
                            <p>[what happen] How to create </p>
                        </a>
                        <div className='product-item__bottom'>
                            <div className='product-item__price'>2,500 won</div>
                            <div className='product-item__love'>
                                <ion-icon name='heart-outline'></ion-icon>
                                <span>236</span>
                            </div>
                        </div>
                    </div>

                    <div className='product-item'>
                        <img src={product4} alt='' />
                        <a href='#!'>
                            <p>[what happen] How to create </p>
                        </a>
                        <div className='product-item__bottom'>
                            <div className='product-item__price'>2,500 won</div>
                            <div className='product-item__love'>
                                <ion-icon name='heart-outline'></ion-icon>
                                <span>236</span>
                            </div>
                        </div>
                    </div>
                    <div className='product-item'>
                        <img src={product5} alt='' />
                        <a href='#!'>
                            <p>[what happen] How to create </p>
                        </a>
                        <div className='product-item__bottom'>
                            <div className='product-item__price'>2,500 won</div>
                            <div className='product-item__love'>
                                <ion-icon name='heart-outline'></ion-icon>
                                <span>236</span>
                            </div>
                        </div>
                    </div>

                    <div className='product-item'>
                        <img src={product5} alt='' />
                        <a href='#!'>
                            <p>[what happen] How to create </p>
                        </a>

                        <div className='product-item__bottom'>
                            <div className='product-item__price'>2,500 won</div>
                            <div className='product-item__love'>
                                <ion-icon name='heart-outline'></ion-icon>
                                <span>236</span>
                            </div>
                        </div>
                    </div>

                    <div className='product-item'>
                        <img src={product5} alt='' />
                        <a href='#!'>
                            <p>[what happen] How to create </p>
                        </a>
                        <div className='product-item__bottom'>
                            <div className='product-item__price'>2,500 won</div>
                            <div className='product-item__love'>
                                <ion-icon name='heart-outline'></ion-icon>
                                <span>236</span>
                            </div>
                        </div>
                    </div>

                    <div className='product-item'>
                        <img src={product5} alt='' />
                        <a href='#!'>
                            <p>[what happen] How to create </p>
                        </a>
                        <div className='product-item__bottom'>
                            <div className='product-item__price'>2,500 won</div>
                            <div className='product-item__love'>
                                <ion-icon name='heart-outline'></ion-icon>
                                <span>236</span>
                            </div>
                        </div>
                    </div>

                    <div className='product-item'>
                        <img src={product5} alt='' />
                        <a href='#!'>
                            <p>[what happen] How to create </p>
                        </a>
                        <div className='product-item__bottom'>
                            <div className='product-item__price'>2,500 won</div>
                            <div className='product-item__love'>
                                <ion-icon name='heart-outline'></ion-icon>
                                <span>236</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='button-center'>
                    <a href='#!' className='btn' type='button'>
                        SEE MORE
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Products;
