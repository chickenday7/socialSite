import React from "react";

const Navigation = () => {
    return (
        <nav className={'nav'}>
            <ul>
                <li className={'nav__elem'}>
                    <a>Profile</a>
                </li>
                <li className={'nav__elem'}>
                    <a>Message</a>
                </li>
                <li className={'nav__elem'}>
                    <a>Friends</a>
                </li>
                <li className={'nav__elem'}>
                    <a>News</a>
                </li>
                <li className={'nav__elem'}>
                    <a>Music</a>
                </li>

            </ul>
        </nav>
    )
};

export default  Navigation;