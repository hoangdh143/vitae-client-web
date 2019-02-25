import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginSection.css'

class LoginSection extends Component {
    render() {
        return(
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 login-form-1">
                        <h3>Login for Form 1</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *" value=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" value=""/>
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