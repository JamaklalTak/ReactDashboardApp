import React, { Component } from 'react';

import './../../css/message-container.css';

class MessageContainer extends Component {
    render(){
        const { userConnectionData } = this.props;
        return(
            <div className="user-message">
                <h1>{userConnectionData.messageTitle}</h1>
                <p>{userConnectionData.message}</p>
            </div>
        );
    }
}

export default MessageContainer;