import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from './../../helper/Button';
import Image from './../../helper/Image';
import MainAppLogo from './../../Assets/Images/socialAppLogo.png';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <Image
                            src={MainAppLogo}
                            alt="main-home-picture"
                        />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <h2 className="app-name">Social App</h2>
                        <p className="app-message">App to connect with your beloved.</p>
                        <Link className="margin-5" to="/Login">
                            <Button
                                type="button"
                                value="Login"
                                className="login-btn"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;