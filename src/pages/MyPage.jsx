import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyWill } from "../api/will";
import { login } from "../modules/userSlice";
import "../Mypage.css";

const MyPage = () => {
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const code = params.get("code");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		if (code) {
			try {
				dispatch(login({ code, redirectUrl: "/myPage" }));
			} catch (error) {
				alert("로그인에 실패하였습니다.");
				navigate(-1);
			}
		}
	}, [code]);

	const [wills, setWills] = useState();
	const [isAfterYear, setIsAfterYear] = useState(false);

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
				setIsAfterYear(true);
			}
		});
	}, []);
	const renderWills = wills?.map((will) => {
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
			{isAfterYear ? (
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
