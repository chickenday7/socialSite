import React, {ComponentType} from "react";
import {Navigate, Params, useLocation, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../components/Redux/redux-store";
import {Location} from "history";

type MapStateToPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {
        let location: Location = useLocation()
        let params: Params = useParams()
        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Navigate to={`/login`}/>
        }
        return <Component {...restProps as T}
                          location={location}
                          router={params}
        />;
    }

    let mapStateToPropsAuthRedirect = (state: StateType): MapStateToPropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    let ConnectedRedirectComponent = connect<MapStateToPropsType, null, {}, StateType>(mapStateToPropsAuthRedirect)(RedirectComponent)


    return ConnectedRedirectComponent
}
