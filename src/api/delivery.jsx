import { requestMethod } from "./method.jsx";

export const reqDelivery = async (userId) => {
	try {
		const { data } = await requestMethod.post(`/will/delivery/${userId}`);
		return data;
	} catch (error) {
		console.error(error);
	}
};
