import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileThunkCreator, ProfileType} from "../../Redux/profileReducer";
import {Params, useParams} from "react-router-dom";
import {StateType} from "../../Redux/redux-store";
import {ThunkDispatch} from "redux-thunk";

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType & {router:Params}

class ProfileAPI extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.props.router.userId === undefined
            ? this.props.getProfile(2)
            : this.props.getProfile(+this.props.router.userId)
    }

    render() {
        debugger
        return (<Profile profile={this.props.profile} />)
    }
}
//__________________________________________________________________________

// let authRedirectProfile = withAuthRedirect(ProfileAPI)

//__________________________________________________________________________

type mapStateToPropsType = {
    profile: ProfileType | null
}
let mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


type mapDispatchToPropsType = {
    getProfile: (userID:number) => void
}
let mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>):mapDispatchToPropsType => { //!!!!!!!!!!!!!!!!!
    return {
        getProfile: (userID) => {
            dispatch(getProfileThunkCreator(userID))
        }
    }

}



let ProfileContainerWithStore = connect<mapStateToPropsType, mapDispatchToPropsType,{router:Params},StateType>
(mapStateToProps, mapDispatchToProps)(ProfileAPI)

//__________________________________________________________________________


const ProfileContainer = () => {
    let params:Params = useParams()
    return (<ProfileContainerWithStore router={params} />)
}


export default ProfileContainer








