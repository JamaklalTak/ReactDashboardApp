import React, { Component } from 'react';
import Button from './../../helper/Button';

class GlobalHeader extends Component {
    render() {
        return (
            <div className="row app-header">
                <div className="col-md-4 profile-name">
                    <b>Welcome </b>
                    <span className="user-name">Jamak Lal Tak</span>
                </div>
                <div className="col-md-4 app-title">
                    Social App
                </div>
                <div className="col-md-4 btn-logout">
                    <Button
                        value="Logout"
                        name="logout"
                        className="profile-logout"
                        id="logout-id"
                        disabled="false"
                        />
                </div>
            </div>
        );
    }
}

export default GlobalHeader;