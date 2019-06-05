import React, { Component } from 'react';

import Image from './../../helper/Image';
import appLogo from './../../Images/socialAppLogo.png';

class LeftPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row border-solid-black mr-10">
                    <div className="user-profile-image">
                        <Image
                            src={appLogo}
                            alt="user-profile-picture"
                            className="profile-picture"
                            id="userProfilePicture"
                        />
                    </div>
                    <div className="user-fullname">
                        <span className="fs-20">Jamak Lal Tak</span>
                        <div className="user-status fs-20">
                            <span className="status-dot"></span>
                            <span className="status-message">Active</span>
                        </div>
                    </div>
                </div>
                <div className="row border-solid-black mr-10 mt-15 h-200">
                    <ul className="options-list">
                        <li>My Posts</li>
                        <li>Account Settings</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default LeftPanel;