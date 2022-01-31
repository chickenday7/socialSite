import React from "react";
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";

const  Navigation = (props:any) => {
    // TYPE DECLARATION!!!!!!!!!!!!!!!!!!!!!!!!!!
    // declare function NavLink(
    //     props: NavLinkProps
    // ): React.ReactElement;
    //
    // interface NavLinkProps
    //     extends Omit<"className" | "style" |  > {
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


    let activeStyle:any = {
        textDecoration: "none",
        color: "orange",
        fontSize: 22 + 'px'
    };
    return (
        <nav className={'nav'}>
            <ul>
                <li className={'nav__elem'}>
                    
                    <NavLink to={`/profile/${props.userID}`} style = {({ isActive }) =>
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



let mapStateToProps = (state:any) => {
    return {
        userID:state.auth.id
    }
}


let NavigationContainer = connect(mapStateToProps)(Navigation)



export default  NavigationContainer;