import { requestMethod } from "./method.jsx";

export const reqDelivery = async (userId) => {
	try {
		const { data } = await requestMethod.post(`/will/delivery/${userId}`);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const updateWill = async (willId, will) => {
	try {
		const { data } = await requestMethod.put(`/will/update/${willId}`, will);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getMyWill = async (userId) => {
	try {
		const { data } = await requestMethod.get(`/will/${userId}`);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getWillDetail = async (willId) => {
	try {
		const { data } = await requestMethod.get(`/will/detail/${willId}`);
		return data;
	} catch (error) {
		console.error(error);
	}
};
export const postWill = async (will) => {
	try {
		const { data } = await requestMethod.post(`/will/create`, will);
		return data;
	} catch (error) {
		console.error(error);
	}
};
