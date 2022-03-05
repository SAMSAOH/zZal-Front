const ShareBtn = () => {
	const handleShareClick = () => {
		if (navigator.share) {
			navigator.share({
				title: "기록하며 성장하기",
				text: "Hello World",
				url: window.location.href,
			});
		} else {
			alert("공유하기가 지원되지 않는 환경 입니다.");
		}
	};
	return (
		<button className="border-btn blue-btn" onClick={handleShareClick}>
			공유하기
		</button>
	);
};

export default ShareBtn;
