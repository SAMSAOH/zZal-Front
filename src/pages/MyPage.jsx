import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyWill } from "../api/will";
import "../Mypage.css";

const MyPage = () => {
	//임시 데이터
	const [wills, setWills] = useState([
		{ willId: "1", createdDate: "2021-03-05" },
		{ willId: "2", createdDate: "2021-03-05" },
	]);
	const [isYear, setIsYear] = useState(false);

	const { userId } = useSelector((state) => state.user);
	useEffect(() => {
		getMyWill(userId).then((res) => {
			setWills(res.data);
			const updateDate = new Date(wills[wills.length - 1].createdDate);
			const now = new Date();
			if (
				updateDate.getMonth() <= now.getMonth() &&
				updateDate.getDate() <= now.getDate()
			) {
				setIsYear(true);
			}
		});
	}, []);
	const renderWills = wills.map((will) => {
		return (
			<div className="renderWills" key={will.id}>
				<div className="willsFormTitle">{will.createdDate} 유서</div>
				<Link to={`/mywill/${will.willId}`}>
					<button className="willsFormBtn">{">>"}</button>
				</Link>
			</div>
		);
	});

	return (
		<div className="container mypage">
			<div className="myPageTitle">
				<div>유서함</div>
			</div>
			<div className="myPageMap">{renderWills}</div>
			{isYear ? (
				<button className="blue-btn myPageBlueBtn">유서 남기기</button>
			) : (
				<div className="noticeText">
					<div className="noticeText1">
						유서 작성은 1년 간격으로 가능합니다.
					</div>
					<div className="noticeText2"> 이전 유서 내용 수정 가능 </div>
				</div>
			)}
		</div>
	);
};

export default MyPage;
