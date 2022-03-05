import { useState } from "react";
import DeliveryModal from "../components/Result/DeliveryModal";
import "../Delivery.css";
const Delivery = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClickDelivery = () => {
		setIsOpen(true);
	};
	return (
		<>
			<div className="delivery container">
				<h2 className="label">배달하기</h2>
				<div className="text-wrapper">
					<section className="text-wrapper">
						<h3>{">>"}배달하기란?</h3>
						<span>{""}</span>
					</section>
					<section>
						<span className="yellow-text">
							**배달 메일
							<br /> 카카오 계정 이메일로 발송됩니다.
						</span>
					</section>
				</div>
				<div className="row-container btn-wrapper">
					<button className="border-btn blue-btn" onClick={handleClickDelivery}>
						배달 신청
					</button>
				</div>
			</div>
			{isOpen && <DeliveryModal setIsOpen={setIsOpen} />}
		</>
	);
};

export default Delivery;
