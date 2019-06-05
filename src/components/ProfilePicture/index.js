import React, { Component } from 'react';

import Image from './../../helper/Image';
import appLogo from './../../Images/socialAppLogo.png';

class ProfilePicture extends Component {
    render() {
        return (
            <div className="col-md-4 mt-15">
                <div className="connection-status">
                    <span className="status-dot"></span>
                </div>
                <Image
                    src={appLogo}
                    alt="user-profile-picture"
                    className="user-connection-profile"
                    id=""
                />
                <div className="fs-10">Jamak Lal Tak</div>
            </div>
        );
    }
}

export default ProfilePicture;