import React from 'react';
import {connect} from "react-redux";
import {authMeThunkCreator} from "../Redux/authReducer";
import Header from "./Header";


class HeaderAPI extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (<Header {...this.props} />);
    }
}

const mapStateToProps = (state:any) =>{
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch:any) => {
  return{
        authMe: () => {
            dispatch(authMeThunkCreator())
        }
  }
}


let HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderAPI)

export default HeaderContainer


