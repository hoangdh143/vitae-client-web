import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginSection.css'
import HttpRequest from '../services/HttpRequest.service';

class LoginSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.sendLoginRequest = this.sendLoginRequest.bind(this);
    }

    sendLoginRequest(e) {
        e.preventDefault();
        const HttpRequestLogin = new HttpRequest();
        console.log(this.state);
        HttpRequestLogin.postRequest('https://vitae.pailabservices.com/login', this.state).then(
            res => {
                console.log(res);
            }
        );
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }
    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return(
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 login-form-1">
                        <h3>Login for Form 1</h3>
                        <form onSubmit={this.sendLoginRequest}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *" value={this.state.email} onChange={this.handleEmail}
                                       />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" value={this.state.password} onChange={this.handlePassword}
                                      />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login"/>
                            </div>
                            <div className="form-group">
                                <a href="#" className="ForgetPwd">Forget Password?</a>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default LoginSection;