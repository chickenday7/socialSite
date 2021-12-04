import React from "react";


class ProfileStatus extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    state = {
        editMode: false
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
    }

    render() {

        return (
            <>
                {!this.state.editMode
                    ? <div>
                        <span onClick={this.activateEditMode} >{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} defaultValue={this.props.status} />
                    </div>
                }


            </>
        )
    }
}

export default ProfileStatus