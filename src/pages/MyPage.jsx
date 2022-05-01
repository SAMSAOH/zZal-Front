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
	const renderWills = wills?.map((will) => {
		return (
			<WillContainer key={will.id}>
				<WillTitle>{will.createdDate} 유서</WillTitle>
				<Link to={`/mywill/${will.willId}`}>
					<YellowBtn>{">>"}</YellowBtn>
				</Link>
			</WillContainer>
		);
	});

	return (
		<Container width="100%">
			<Head>
				<span>유서함</span>
			</Head>
			<ListContainer>{renderWills}</ListContainer>
			{isAfterYear ? (
				<WriteWillBtn padding="12px 40px">유서 남기기</WriteWillBtn>
			) : (
				<NoticeWrapper>
					<div>유서 작성은 1년 간격으로 가능합니다.</div>
					<div> 이전 유서 내용 수정 가능 </div>
				</NoticeWrapper>
			)}
		</Container>
	);
};

export default MyPage;
const Head = styled.div`
	border-bottom: solid 3px white;
	width: 90%;
	text-align: center;
	& > span {
		font-size: 36px;
		margin-top: 19px;
		margin-bottom: 12px;
	}
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
const NoticeWrapper = styled.div`
	position: fixed;
	bottom: 0;
	margin-bottom: 60px;
	text-align: center;
	opacity: 80%;
	& > div:nth-child(1) {
		color: #f5de0e;
		font-size: 18px;
		margin-bottom: 10px;
	}
	& > div:nth-child(2) {
		color: white;
		size: 12px;
	}
`;
