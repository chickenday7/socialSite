import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileThunkCreator} from "../../Redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


class ProfileAPI extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getProfile(this.props.router.params.userId)
    }

    render() {
        console.log(this.props.router)
        return (<Profile {...this.props.profilePage.profile} />)
    }
}
//__________________________________________________________________________

let authRedirectProfile = withAuthRedirect(ProfileAPI)

//__________________________________________________________________________

let mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        getProfile: (userID: any) => {
            dispatch(getProfileThunkCreator(userID))
        }
    }

}



let ProfileContainerWithStore = connect(mapStateToProps, mapDispatchToProps)(authRedirectProfile)

//__________________________________________________________________________


const ProfileContainer = (props: any) => {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (<ProfileContainerWithStore router={{location, navigate, params}}/>)
}


export default ProfileContainer








