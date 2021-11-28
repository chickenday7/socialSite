import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";



class ProfileAPI extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    render() {
        return (<Profile />)
    }


}



let mapStateToProps = (state:any) => {
    debugger;
    return {

    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {

    }
}

let ProfileContainer = connect(mapStateToProps,mapDispatchToProps) (ProfileAPI)

export default ProfileContainer