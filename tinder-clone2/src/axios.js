import axios from 'axios'

const instance = axios.create({
	baseURL: "https://tinder-backend1985.herokuapp.com/"
})

export default instance;