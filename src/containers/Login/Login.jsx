import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Login.scss'

export default class Login extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="loginpage">
                <div class="header">
			        <h1>Hotel Management</h1>
		        </div>
		        <div class="main-layout">
					<div class="main-form">
						<h2>Fill out the form below to login</h2>
						<form action="#" method="post">
						    <div class="form-sub">
								<input type="text" name="Username" placeholder="Username " required="" />
								<div class="icon">
									<i class="fa fa-user" aria-hidden="true"></i>
								</div>
							</div>
                            <div class="form-sub">
                                <input type="password" name="Password" placeholder="Password" required="" />
                                <div class="icon">
                                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="anim">
                                <input type="checkbox" class="checkbox"/>
                                <span>Remember Me</span> 
                                <a href="#">Forgot Password</a>
                            </div>
							<div class="clear"></div>
							<div class="submit-button">
									<input type="submit" value="Login"/>
								</div>
						</form>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}
