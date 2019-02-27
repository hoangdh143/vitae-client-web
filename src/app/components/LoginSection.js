import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginSection.css'
import '../services/Login.service'
import LoginService from '../services/Login.service';
import Noti from './Noti';
import ModalExample from './ModalExample';

class LoginSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            notiActive: false,
            notiMessage: '',
            modalActive: false,
            modalMessage: ''
        };
        this.myref = React.createRef();
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.displayNoti = this.displayNoti.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        const loginService = new LoginService();
        loginService.attemptLogin(this.state.email, this.state.password).then(
            loginSuccess => {
                console.log(loginSuccess);
                if (loginSuccess) {
                    this.openModal("Login successful!");
                } else {
                    this.displayNoti("Unsuccessful login!")
                }
            }
        );
    }

    displayNoti(message) {
        this.setState({notiActive: true});
        this.setState({notiMessage: message});
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }
    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    openModal(message) {
        this.setState({modalActive: true, modalMessage: message});
        this.myref.current.open();
    }

    render() {
        return(
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 login-form-1">
                        <h3>Login for Form 1</h3>
                        <Noti show={this.state.notiActive} message={this.state.notiMessage} />
                        <form onSubmit={this.handleLogin}>
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
                <ModalExample show={this.state.modalActive} message={this.state.modalMessage} ref={this.myref}/>
            </div>
        );
    }
}

export default LoginSection;