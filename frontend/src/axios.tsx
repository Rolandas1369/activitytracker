import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/';

let get_token = () => {
	axios.post(baseURL + 'token/', {email: 'email@email.com', password: 'password'})
    .then((res) => {
        localStorage.setItem('access_token', res.data.access)
    })
}
get_token()

let token = localStorage.getItem('access_token')





const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: 'JWT ' + token,

		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});




export default axiosInstance;