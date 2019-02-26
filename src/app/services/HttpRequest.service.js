import axios from 'axios';

class HttpRequest {
    constructor(Authorization = null, userId = null, deviceToken = "NON0DEVICE0TOKEN", deviceType = "1") {
        let headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        };
        if (Authorization != null && Authorization.trim() != "") headers.Authorization = Authorization;
        if (userId != null) headers.userId = userId;
        if (deviceToken != null && deviceToken.trim() != "") headers.deviceToken = deviceToken;
        if (deviceType != null) headers.deviceType = deviceType;
        this.headers = headers;

    }
    getRequest(url, params = null) {
        const config = {
            headers: this.headers,
            params
        };
        return axios
            .get(url, config)
            .then(res => res.data)
            .catch(err => err.response.data);
    }

    postRequest(url, data = null) {
        const config = {
            headers: this.headers
        };
        return axios
            .post(url, data, config)
            .then(res => res.data)
            .catch(err => err.response.data);
    }

    putRequest(url, data = null){
        const config = {
            headers: this.headers
        };
        console.log(url, data);
        return axios
            .put(url, data, config)
            .then(res => {
                console.log(res);
                return res.data
            })
            .catch(err => err.response.data);
    }

}

export default HttpRequest;