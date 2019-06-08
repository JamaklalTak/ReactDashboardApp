import React, { Component } from 'react';
import Button from './../../helper/Button';

class GlobalHeader extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { userData } = this.props;
        return (
            <div className="row app-header">
                <div className="col-md-4 profile-name">
                {userData && userData.userName && userData.userName != null && userData.userName != undefined ?
                    <span>
                        <b>Welcome </b>
                        <span className="user-name">
                            {userData.userName}
                        </span>
                    </span>
                : ''}
                </div>
                <div className="col-md-4 app-title">
                    Social App
                </div>
                <div className="col-md-4 btn-logout">
                {userData && userData.userName && userData.userName != null && userData.userName != undefined ?
                    <Button
                        value="Logout"
                        name="logout"
                        className="profile-logout"
                        id="logout-id"
                        disabled="false"
                        />
                    :''
                }
                </div>
            </div>
        );
    }
}

export default GlobalHeader;