import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Input from './../../helper/Input';
import Button from './../../helper/Button';

import { fetchUserDetail } from './action';

class Login extends Component {
	constructor(props) {
		super(props);
		this.handleUserLogin = this.handleUserLogin.bind(this);
	}
	handleUserLogin = async () => {
		const userName = document.getElementById('username').value;
		const userPassword = document.getElementById('userPassword').value;
		if (userName && userPassword && userName != null && userPassword != null) {
			const response = await this.props.callLoginService(userName, userPassword);
			if (this.props.userLoginDetail && this.props.userLoginDetail[0].id && this.props.userLoginDetail[0].userName) {
				this.props.history.push({ pathname: `/${this.props.userLoginDetail[0].userName}` });
			}
		} else {
			alert("Please Enter The Credentials");
		}
	}
	render() {
		return (
			<div className="container login-box">
				<h3>Login to SocialApp</h3>
				<div className="credential-box">
					<div className="margin-10">
						<Input
							id="username"
							className="userfullname"
							name="usename"
							type="text"
							placeholder="USERNAME"
							maxlength="250"
							disabled="False"
						/>
					</div>
					<div className="margin-10">
						<Input
							id="userPassword"
							className="user-password"
							name="usepassword"
							type="password"
							placeholder="PASSWORD"
							maxlength="10"
							disabled="False"
						/>
					</div>
					<div className="margin-10 rememberme-check">
						<Input
							id="rememberMeCheck"
							className="rememberm-check"
							type="checkbox"
							value="remeberme"
							name="remember-me"
						/>
						<span className="rememberme-text margin-5">
							Remember Me
                        </span>
					</div>
					<Button
						id="loginUser"
						className="login-user"
						name="loginuser"
						type="button"
						value="Login"
						onClick={this.handleUserLogin}
					/>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		userLoginDetail: state.userDetail.data
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		callLoginService: (a, b) => dispatch(fetchUserDetail(a, b))
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));