import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from './../../helper/Image';
import imagePath from './../../Assets/Images/mountains.jpg';

class LeftPanel extends Component {
    render() {
        const { userData } = this.props;
        return (
            <React.Fragment>
                <div className="row border-solid-black mr-10 profile-box">
                    <div className="user-profile-image">
                        <Image
                            src={imagePath}
                            alt="user-profile-picture"
                            className="profile-picture"
                            id="userProfilePicture"
                        />
                    </div>
                    <div className="user-fullname">
                        <span className="fs-20">{userData.userName}</span>
                        <div className="user-status fs-20">
                            <span className="status-dot"></span>
                            <span className="status-message">{userData.userStatus}</span>
                        </div>
                    </div>
                </div>
                <div className="row border-solid-black mr-10 mt-15 h-200">
                    <ul className="options-list">
                        <li>My Posts</li>
                        <li><Link to='/Edit'>Account Settings</Link></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default LeftPanel;