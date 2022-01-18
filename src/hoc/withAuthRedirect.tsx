import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../components/Redux/redux-store";

type MapStateToPropsType = {
    isAuth:boolean
}
export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) {
                return <Navigate to={'/login/'}/>
            }
            return <Component {...restProps} />;
        }
    }
    let mapStateToPropsAuthRedirect = (state:StateType):MapStateToPropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    let ConnectedRedirectComponent = connect<MapStateToPropsType,null,{},StateType>(mapStateToPropsAuthRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}
