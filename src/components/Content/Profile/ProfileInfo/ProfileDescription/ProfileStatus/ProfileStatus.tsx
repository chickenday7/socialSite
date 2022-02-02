import React, {ChangeEvent} from "react";
import {StatusWithoutEdit} from "./StatusWithoutEdit/StatusWithoutEdit";
import {StatusWithEditMode} from "./StatusWithEditMode/StatusWithEditMode";

type LocalStateType = {
    editMode: boolean
    status: string
}
type ProfileStatusType = {
    status: string | undefined
    updateStatus: (status: string) => void
    isOwner: boolean
}
class ProfileStatus extends React.Component<ProfileStatusType, LocalStateType> {
    state: LocalStateType = {
        editMode: false,
        status: this.props.status ? this.props.status : ''
    }

    activateEditMode = () => {
        if(this.props.isOwner) {
            this.setState({
                editMode: true
            })
        }
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<LocalStateType>, snapshot?: any) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status ? this.props.status : ''
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <StatusWithoutEdit status={this.props.status}
                                         activateEditMode={this.activateEditMode}
                                         isOwner={this.props.isOwner}

                    />
                    : <StatusWithEditMode localStatus={this.state.status}
                                          onChangeStatus={this.onChangeStatus}
                                          deactivateEditMode={this.deactivateEditMode}
                                          status={this.props.status}

                    />
                }
            </>
        )
    }
}

export default ProfileStatus