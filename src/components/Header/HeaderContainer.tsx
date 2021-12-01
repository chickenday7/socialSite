import React from 'react';
import {connect} from "react-redux";
import {setUserDataAC} from "../Redux/authReducer";
import Header from "./Header";
import axios from "axios";


class HeaderAPI extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            headers: {
                'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            },
            withCredentials: true
        }).then(response => {
            console.log(response)
            let {id,email,login} = response.data.data
            if (response.data.resultCode === 0){
                this.props.setUserData(id,email,login)
            }
        });
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
      setUserData: (id:any,email:any,login:any) => {
          dispatch(setUserDataAC(id,email,login))
      }
  }
}


let HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderAPI)

export default HeaderContainer


