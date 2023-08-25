import axios from 'axios';

// axios 쿠키 데이터 주고받기 위해서 ..

const DOMAIN = 'http://localhost:9000';
axios.defaults.withCredentials = true;
const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data,
    })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export default request;
