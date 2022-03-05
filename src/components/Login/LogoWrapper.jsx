const LogoWrapper = () => {
	return (
		<div className="col-container logo-wrapper">
			<span className="sub-logo">
				<img src={"/img/z.png"} width="16px" />
				세대 멸망 대비 프로젝트
			</span>
			<img src="./img/logo.png" width="250px" id="logo" />
		</div>
	);
};

export default LogoWrapper;