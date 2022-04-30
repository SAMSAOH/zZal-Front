import axios from "axios";
import { requestMethod } from "../api/method";

export const kakaoLoginHandler = async (code, redirect_uri) => {
	const data = {
		grant_type: "authorization_code",
		client_id: process.env.REACT_APP_KAKAO_REST_KEY,
		redirect_uri: `${process.env.REACT_APP_LOCAL}${redirect_uri}`,
		code: code,
	};
	const queryString = Object.keys(data)
		.map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
		.join("&");
	return new Promise(async (resolve, rejects) => {
		const { data } = await axios.post(
			"https://kauth.kakao.com/oauth/token",
			queryString,
			{
				headers: {
					"Content-type": "application/x-www-form-urlencoded;charset=utf-8",
				},
			}
		);
		// 서버 요청
		await requestMethod
			.post("/signIn", {
				kakaoAccessToken: data.access_token,
			})
			.then((res) => {
				resolve({ userId: res.data.userId });
			});
		// resolve({ userId: 1 });
	});
};
