import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {getProfileThunkCreator, setProfileUserAC} from "../../Redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";


class ProfileAPI extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getProfile(this.props.router.params.userId)
    }

    render() {
        return (<Profile {...this.props.profilePage.profile} />)
    }
}


let mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage,
        auth: state.auth

    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        getProfile: (userID:any) =>{
            dispatch(getProfileThunkCreator(userID))
        }
    }

}

const ProfileContainer = (props: any) => {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (<ProfileContainerWithStore router={{location, navigate, params}}/>)
}
export default ProfileContainer


let ProfileContainerWithStore = connect(mapStateToProps, mapDispatchToProps)(ProfileAPI)

