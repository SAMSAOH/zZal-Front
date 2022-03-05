const KakaoBtn = () => {
	const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=http://localhost:3000/login&response_type=code`;

	return (
		<a href={kauthUrl} className="border-btn" id="kakao-btn">
			카카오 로그인
		</a>
	);
};

export default KakaoBtn;
