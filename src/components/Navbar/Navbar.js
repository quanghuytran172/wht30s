import React, { useState } from "react";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
    const [menuOpen, toggleMenu] = useState(false);

    return (
        <div className='header'>
            <div className='nav'>
                <img src={logo} alt='zxc' />
                <ul className={menuOpen ? "active" : ""}>
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

                <button
                    className={menuOpen ? "active" : ""}
                    onClick={() => toggleMenu(!menuOpen)}
                >
                    <ion-icon name={menuOpen ? "close-outline" : "menu"} />
                </button>
                <button
                    className={!menuOpen ? "active button2" : "button2"}
                    onClick={() => toggleMenu(!menuOpen)}
                >
                    <ion-icon name='close-outline' />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
