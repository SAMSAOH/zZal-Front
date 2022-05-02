import { Button } from "./Buttons";

const KakaoBtn = ({ redirectUri }) => {
	const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=${process.env.REACT_APP_LOCAL}${redirectUri}&response_type=code`;

	return (
		<a href={kauthUrl} id="kakao-btn">
			<Button>카카오 로그인</Button>
		</a>
	);
};

export default KakaoBtn;
