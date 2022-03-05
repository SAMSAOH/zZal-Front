import KakaoBtn from "../commons/KakaoBtn";
import Modal from "../commons/Modal";
const KakaoModal = ({ setIsOpen }) => {
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
				<small className="yellow-text">
					**로그인 시, email 제공 동의를 해주셔야 메일을 통해 배달하기가
					가능합니다.**
				</small>
				<KakaoBtn redirectUri={"/delivery"} />
			</div>
		</Modal>
	);
};

export default KakaoModal;
