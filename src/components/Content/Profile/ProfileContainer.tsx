import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {ownerCheckAC, ProfileType, setProfileTC, setStatusTC, updateStatusTC} from "../../Redux/profileReducer";
import {Params, useLocation, useParams} from "react-router-dom";
import {StateType} from "../../Redux/redux-store";
import {ThunkDispatch} from "redux-thunk";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {Location} from "history";

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType & { router: Params,location:Location }

type LocalStateType = {
    userId: Location
}

class ProfileAPI extends React.Component<ProfilePropsType, LocalStateType> {
    state: LocalStateType = {
        userId: this.props.location
    }
    componentDidMount() {
        this.props.router.userId === 'undefined'
            ? this.props.getProfile(2)
            : this.props.getProfile(+this.props.router.userId!)
        this.props.setStatus(+this.props.router.userId!)
        this.props.ownerCheckAC(+this.props.router.userId!,this.props.ownerID)
    }
    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.location !== this.props.location){
            this.props.getProfile(+this.props.router.userId!)
            this.props.setStatus(+this.props.router.userId!)
        }
    }

    render() {

        return(
            <>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         isOwner={this.props.isOwner}

                />
            </>
        )
    }
}


let authRedirectProfile = withAuthRedirect(ProfileAPI)


type mapStateToPropsType = {
    profile: ProfileType | null
    status: string | undefined
    isOwner:boolean
    ownerID:number | null
}
let mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isOwner: state.profilePage.isOwner,
        ownerID: state.auth.id
    }
}


type mapDispatchToPropsType = {
    getProfile: (userID: number) => void
    setStatus: (userID: number) => void
    updateStatus: (status: string) => void
    ownerCheckAC: (urlProfileID:number,ownerID:number | null)=>void
}
let mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>): mapDispatchToPropsType => { //!!!!!!!!!!!!!!!!!
    return {
        getProfile: (userID) => {
            dispatch(setProfileTC(userID))
        },
        setStatus: (userID) => {
            dispatch(setStatusTC(userID))
        },
        updateStatus: (status: string) => {
            dispatch(updateStatusTC(status))
        },
        ownerCheckAC:(urlProfileID:number,ownerID:number | null)=>{
            dispatch(ownerCheckAC(urlProfileID,ownerID))
        }

    }
}


let ProfileContainerWithStore = connect<mapStateToPropsType, mapDispatchToPropsType, {router: Params,location:Location }, StateType>
(mapStateToProps, mapDispatchToProps)(authRedirectProfile)



 const ProfileContainer = () => {
    let params: Params = useParams()
     let location = useLocation()
    return (<ProfileContainerWithStore router={params}
                                       location={location}
    />)
}


export default ProfileContainer









