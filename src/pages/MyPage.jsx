import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyWill } from "../api/will";
import { login } from "../modules/userSlice";
import { Container } from "../components/commons/Container";
import { BorderBlueBtn } from "../components/commons/Buttons";
import styled from "styled-components";

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
	const renderWills = wills?.map((will) => (
		<WillContainer key={will.id}>
			<WillTitle>{will.createdDate} 유서</WillTitle>
			<Link to={`/mywill/${will.willId}`}>
				<YellowBtn>{">>"}</YellowBtn>
			</Link>
		</WillContainer>
	));

	return (
		<Container width="100%">
			<Head>유서함</Head>
			<ListContainer>{renderWills}</ListContainer>
			{isAfterYear ? (
				<WriteWillBtn padding="12px 40px">유서 남기기</WriteWillBtn>
			) : (
				<NoticeBox>
					<div>유서 작성은 1년 간격으로 가능합니다.</div>
					<div> 이전 유서 내용 수정 가능 </div>
				</NoticeBox>
			)}
		</Container>
	);
};

export default MyPage;
const Head = styled.h2`
	border-bottom: solid 3px white;
	width: 90%;
	text-align: center;
	padding-bottom: 20px;
`;
const ListContainer = styled.div`
	width: 90%;
`;

const WillContainer = styled.div`
	border-bottom: solid 3px white;
	padding-top: 30px;
	padding-bottom: 30px;
`;

const WillTitle = styled.span`
	display: inline-block;
	color: #f5de0e;
	font-size: 20px;
`;
const YellowBtn = styled.button`
	float: right;
	color: #f5de0e;
`;

const WriteWillBtn = styled(BorderBlueBtn)`
	font-size: 36px;
	position: fixed;
	bottom: 0;
	margin-bottom: 60px;
`;
const NoticeBox = styled.p`
	position: fixed;
	bottom: 0;
	width: 90%;
	border: solid 3px #f5de0e;
	padding: 20px;
	color: #f5de0e;
	background-color: #ffffff20;
	font-size: small;
	text-align: center;
	& > div:nth-child(1) {
		color: #f5de0e;
		font-size: medium;
		margin-bottom: 10px;
	}
	& > div:nth-child(2) {
		color: white;
	}
`;
