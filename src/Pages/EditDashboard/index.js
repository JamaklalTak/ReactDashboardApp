import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './../../helper/Input';
import Button from './../../helper/Button';
import Select from './../../helper/Select';

import { updateUserDetail } from './action';

class EditDashboard extends Component {
    constructor(props){
        super(props);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleUserStatusChange = this.handleUserStatusChange.bind(this);
        this.updateUserDetail = this.updateUserDetail.bind(this);
        this.state=({
            fullname: '',
            username: '',
            status: ''
        });
    }
    componentWillMount = () => {
        this.setState({
            fullname: this.props.userAllData.fullName,
            username: this.props.userAllData.userName,
            status: this.props.userAllData.userStatus,
        });
    }
    handleFullNameChange = () => {
        const changedValue = document.getElementById('fullname').value;
        this.setState({
            fullname: changedValue
        });
    }
    handleUserNameChange = () => {
        const changedValue = document.getElementById('username').value;
        this.setState({
            username: changedValue
        });
    }
    handleUserStatusChange = (e) => {
        const changedValue = e.target.value;
        this.setState({
            status: changedValue
        });
    }
    updateUserDetail = () => {
        const options = {
            fullName: this.state.fullname,
            userName: this.state.username,
            userStatus: this.state.status
        }
        this.props.callUpdateUSer(this.props.userAllData.id, options);
    }
    render() {
        const { userAllData } = this.props;
        return (
            <React.Fragment>
                <h3>Update Details</h3>
                <div className="container border-solid-black user-detail-form">
                    <div className="row margin-10">
                        <label className="col-md-3">FullName:</label>
                        <Input
                            id="fullname"
                            className="col-md-7 updateUserFullName"
                            name="usefullname"
                            type="text"
                            value={this.state.fullname}
                            placeholder="FULLNAME"
                            maxlength="250"
                            onChange={this.handleFullNameChange}
                        />
                    </div>
                    <div className="row margin-10">
                        <label className="col-md-3">UserName:</label>
                        <Input
                            id="username"
                            className="col-md-7 updateUserName"
                            name="usename"
                            type="text"
                            value={this.state.username}
                            placeholder="USERNAME"
                            maxlength="250"
                            onChange={this.handleUserNameChange}
                        />
                    </div>
                    <div className="row margin-10">
                        <label className="col-md-3">Status:</label>
                        <Select
                            id='userStatus'
                            className="col-md-7 updateUserStatus"
                            optionsArray={['Active', 'Busy', 'Traveling']}
                            name='statusOptions'
                            value={this.state.status}
                            onChange={this.handleUserStatusChange}
                        />
                    </div>
                    <div className="row">
                        <span className="col-md-4"></span>
                        <Button
                            id="updateUser"
                            className="col-md-4 update-user-detail"
                            name="updateuser"
                            type="button"
                            value="Update"
                            onClick={this.updateUserDetail}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      userAllData: state.userDetail.data[0]
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        callUpdateUSer: (id, detail) => dispatch(updateUserDetail(id, detail))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(EditDashboard);
// export default EditDashboard;