import Modal from "../commons/Modal";
const KakaoModal = ({ setIsOpen }) => {
	const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=http://localhost:3000/&response_type=code`;
	const handleDelClick = () => {
		setIsOpen(false);
	};
	return (
		<Modal setIsOpen={setIsOpen}>
			<div className="col-container border-container modal">
				<button id="del-btn" onClick={handleDelClick}>
					x
				</button>
				<span>배달하기 기능은 로그인 이후 가능합니다.</span>
				<a href={kauthUrl} className="border-btn" id="kakao-btn">
					카카오 로그인
				</a>
			</div>
		</Modal>
	);
};

export default KakaoModal;
