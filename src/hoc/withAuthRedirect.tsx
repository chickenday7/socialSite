import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../components/Redux/redux-store";

type MapStateToPropsType = {
    isAuth:boolean
}

export function withAuthRedirect<T>(Component: ComponentType<T>)  {

    function RedirectComponent(props: MapStateToPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Navigate to={`/login`}/>
        }
        return <Component {...restProps as T} />;
    }

    let mapStateToPropsAuthRedirect = (state:StateType):MapStateToPropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    let ConnectedRedirectComponent = connect<MapStateToPropsType,null,{},StateType>(mapStateToPropsAuthRedirect)(RedirectComponent)



    return ConnectedRedirectComponent
}
