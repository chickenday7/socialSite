import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {

    let activeStyle:any = {             // тут надо спросить!!!!!!!!!!!!!!!!!!!//
        textDecoration: "none",
        color: "orange"
    };
    return (
        <nav className={'nav'}>
            <ul>
                <li className={'nav__elem'}>
                    <NavLink to="/profile" style = {({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } >Profile</NavLink>
                </li>
                <li className={'nav__elem'}>
                    <NavLink to="/messages" style = {({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Messages</NavLink>
                </li>
                <li className={'nav__elem'}>
                    <NavLink to="/friends" style = {({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Friends</NavLink>
                </li>
                <li className={'nav__elem'}>
                    <NavLink to="/news" style = {({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>News</NavLink>
                </li>
                <li className={'nav__elem'}>
                    <NavLink to="/music" style = {({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Music</NavLink>
                </li>

            </ul>
        </nav>
    )
};

export default  Navigation;