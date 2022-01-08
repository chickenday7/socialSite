import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {ProfileType, setProfileTC, setStatusTC, updateStatusTC} from "../../Redux/profileReducer";
import {Params, useParams} from "react-router-dom";
import {StateType} from "../../Redux/redux-store";
import {ThunkDispatch} from "redux-thunk";

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType & {router:Params}

class ProfileAPI extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.props.router.userId === undefined
            ? this.props.getProfile(2)
            : this.props.getProfile(+this.props.router.userId)
        this.props.setStatus(+this.props.router.userId!)

    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />
    }
}
//__________________________________________________________________________

// let authRedirectProfile = withAuthRedirect(ProfileAPI)

//__________________________________________________________________________

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string | undefined
}
let mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


type mapDispatchToPropsType = {
    getProfile: (userID:number) => void
    setStatus: (userID:number) => void
    updateStatus: (status:string)=> void
}
let mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>):mapDispatchToPropsType => { //!!!!!!!!!!!!!!!!!
    return {
        getProfile: (userID) => {
            dispatch(setProfileTC(userID))
        },
        setStatus: (userID) => {
            dispatch(setStatusTC(userID))
        },
        updateStatus: (status:string) =>{
            dispatch(updateStatusTC(status))
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








