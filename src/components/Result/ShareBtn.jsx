import { BorderBlueBtn } from "../commons/Buttons";

const ShareBtn = () => {
	const handleShareClick = () => {
		if (navigator.share) {
			navigator.share({
				title: "지구에서 잘 놀다갑니다.",
				text: "나의 유서",
				url: window.location.href,
			});
		} else {
			alert("공유하기가 지원되지 않는 환경 입니다.");
		}
	};
	return <BorderBlueBtn onClick={handleShareClick}>공유하기</BorderBlueBtn>;
};

export default ShareBtn;
