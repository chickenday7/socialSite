import React from 'react';
import {connect} from "react-redux";
import {authMeTC, AuthReducerType, logoutMeTC} from "../Redux/authReducer";
import Header from "./Header";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "../Redux/redux-store";

type HeaderAPIType = MapStateToPropsType & MapDispatchToPropsType
class HeaderAPI extends React.Component<HeaderAPIType> {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (<Header {...this.props} />);
    }
}
type MapStateToPropsType = {
    auth:AuthReducerType
}
const mapStateToProps = (state: StateType):MapStateToPropsType => {
    return {
        auth: state.auth
    }
}

type MapDispatchToPropsType = {
    authMe:()=>void
    logout:()=>void
}
const mapDispatchToProps = (dispatch:ThunkDispatch<any, any, any>):MapDispatchToPropsType => {
    return {
        authMe: () => {
            dispatch(authMeTC())
        },
        logout: () => {
            dispatch(logoutMeTC())
        }
    }
}


let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)

export default HeaderContainer


