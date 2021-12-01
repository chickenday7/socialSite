import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    // TYPE DECLARATION!!!!!!!!!!!!!!!!!!!!!!!!!!
    // declare function NavLink(
    //     props: NavLinkProps
    // ): React.ReactElement;
    //
    // interface NavLinkProps
    //     extends Omit<LinkProps, "className" | "style"> {
    //     caseSensitive?: boolean;
    //     className?:
    //         | string
    //         | ((props: { isActive: boolean }) => string);
    //     end?: boolean;
    //     style?:
    //         | React.CSSProperties
    //         | ((props: {
    //         isActive: boolean;
    //     }) => React.CSSProperties);
    // }


    let activeStyle:any = {             // тут надо спросить!!!!!!!!!!!!!!!!!!!//
        textDecoration: "none",
        color: "orange",
        fontSize: 22 + 'px'
    };
    return (
        <nav className={'nav'}>
            <ul>
                <li className={'nav__elem'}>
                    <NavLink to="/profile/21021" style = {({ isActive }) =>
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