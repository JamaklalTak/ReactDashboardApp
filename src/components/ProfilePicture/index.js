import React, { Component } from 'react';

import Image from './../../helper/Image';

class ProfilePicture extends Component {
    render() {
        const { userConnectionData } = this.props;
        return (
            <div className="col-md-4 mt-15">
                <div className="connection-status">
                    <span className="status-dot"></span>
                </div>
                <Image
                    src={require('./../../Assets/Images/'+userConnectionData.profilePhoto)}
                    alt="user-profile-picture"
                    className="user-connection-profile"
                    id=""
                />
                <div className="fs-10">{userConnectionData.fullName}</div>
            </div>
        );
    }
}

export default ProfilePicture;