import React from "react";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
    return (
        <div className='header'>
            <div className='nav'>
                <img src={logo} alt='zxc' />
                <ul>
                    <li>
                        <a href='#!'>INTRODUCTION</a>
                    </li>
                    <li>
                        <a href='#!'>SOLUTION</a>
                    </li>
                    <li>
                        <a href='#!'>RATE PLAN</a>
                    </li>
                    <li>
                        <div className='vertical-bar'></div>
                    </li>
                    <li>
                        <a href='#!'>LOGIN</a>
                    </li>

                    <li>
                        <a href='#!'>APPLY FOR FREE USE</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
