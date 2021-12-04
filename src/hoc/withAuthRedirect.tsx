import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsAuthRedirect = (state:any) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
        }

        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login/'}/>
            }
            return <Component {...this.props} />;
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsAuthRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}