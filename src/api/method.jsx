import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});
export const requestMethod = {
	post: (endPoint, body) => instance.post(endPoint, body),
	get: (endPoint) => instance.get(endPoint),
	put: (endPoint, body) => instance.put(endPoint, body),
};
