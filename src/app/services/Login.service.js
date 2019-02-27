import HttpRequest from './HttpRequest.service';

const loginURL = 'https://vitae.pailabservices.com/login';

class LoginService {
    async attemptLogin(email, password) {
        const HttpRequestLogin = new HttpRequest();
        const data = {email: email, password: password};
        let res = await HttpRequestLogin.postRequest(loginURL, data);
        if (res.success) {
            return true;
        } else {
            return false;
        };
    }
}

export default LoginService;