import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setProfileUserAC} from "../../Redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";



class ProfileAPI extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.router.params.userId}`,{
            headers: {
                'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            }
        }).then(response => {
            console.log(response.data)
            this.props.setProfileUser(response.data)
        });
    }

    render() {
        console.log(this.props.router.params.userId)
        return (<Profile {...this.props.profilePage.profile} />)
    }
}



let mapStateToProps = (state:any) => {
    return {
    profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
    setProfileUser: (objProfile:any) => {
        dispatch(setProfileUserAC(objProfile))
    }

    }

}

const ProfileContainer = (props:any) => {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
  return(<ProfileContainerWithStore router = {{location,navigate,params}} />)
}
export default ProfileContainer




let ProfileContainerWithStore = connect(mapStateToProps,mapDispatchToProps) (ProfileAPI)

