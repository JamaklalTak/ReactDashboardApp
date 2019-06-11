import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './../../helper/Button';

class GlobalHeader extends Component {
    constructor(props){
        super(props);
        this.userName = '';
        this.redirectToHome = this.redirectToHome.bind(this);
    }
    redirectToHome = () => {
        this.props.history.push('/');
        window.location.reload();
    }
    render() {
        this.userName = this.props.userData && this.props.userData[0] && this.props.userData[0].userName ? this.props.userData[0].userName : '';
        return (
            <div className="row app-header">
                <div className="col-md-4 profile-name">
                {this.userName && this.userName  != null && this.userName  != undefined ?
                    <span>
                        <b>Welcome </b>
                        <span className="user-name">
                            {this.userName}
                        </span>
                    </span>
                : ''}
                </div>
                <div className="col-md-4 app-title">
                    Social App
                </div>
                <div className="col-md-4 btn-logout">
                {this.userName && this.userName  != null && this.userName  != undefined ?
                    <Button
                        value="Logout"
                        name="logout"
                        className="profile-logout"
                        id="logout-id"
                        disabled="false"
                        onClick={this.redirectToHome}
                        />
                    :''
                }
                </div>
            </div>
        );
    }
}

export default withRouter(GlobalHeader);