import React, {ChangeEvent} from "react";

type LocalStateType = {
    editMode:boolean
    status: string
}
type ProfileStatusType = {
    status:string | undefined
    updateStatus: (status:string)=> void
}
class ProfileStatus extends React.Component<ProfileStatusType, LocalStateType> {
    state:LocalStateType = {
        editMode: false,
        status:this.props.status ? this.props.status : ''
    }
    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<LocalStateType>, snapshot?: any) {
        if(this.props.status !== prevProps.status){
            this.setState({
                status:this.props.status ? this.props.status : ''
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div>
                        Status:
                        {this.props.status
                            ? <span onClick={this.activateEditMode}>{this.props.status}</span>
                            : <span onClick={this.activateEditMode} style={{color: "gray"}} >{'Write your status here'}</span>
                        }
                    </div>
                    : <div>
                        <input onChange={this.onChangeStatus} value={this.state.status} autoFocus={true}
                               onBlur={this.deactivateEditMode} placeholder={this.props.status ? this.props.status : 'Write your status'} defaultValue={this.props.status}  />
                    </div>
                }


            </>
        )
    }
}

export default ProfileStatus