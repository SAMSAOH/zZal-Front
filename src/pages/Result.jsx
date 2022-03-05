import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AudioPart from "../components/Result/AudioPart";
import Header from "../components/Result/Header";
import KakaoModal from "../components/Result/KakaoModal";
import EditQuestion from "../components/Result/EditQuestion";
import Question from "../components/Result/Question";
import ShareBtn from "../components/Result/ShareBtn";
import Will from "../components/Result/Will";
import { useNavigate, useLocation,Link } from 'react-router-dom'
import "../Result.css";
const Result = () => {
	const { willId } = useParams();
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation()
	const [isMyPage, setIsMyPage]=useState(false);
	const [isYear, setIsYear]=useState(true);
	const [isEdit, setIsEdit]=useState(false);

	const handleClickDelivery = () => {
		setIsOpen(true);
	};
	const [resultContent, setResultContent] = useState({});

	useEffect(() => {
		axios.get(`/will/detail/${willId}`).then((res) => setResultContent(res.data));
		if(location.pathname.includes("mywill")) {
			setIsMyPage(true);
			const updateDate=new Date(resultContent.createdDate);
        	const now=new Date();
        	if(updateDate.getMonth()<=now.getMonth() && updateDate.getDate()<=now.getDate()){
            	setIsYear(true);
			}
		}
		if(location.pathname.includes("edit")){
			setIsEdit(true);
		}
	}, []);

	return (
		<>
			<div className="result container result-container">
				<Header owner={resultContent.owner} />
				{
					isEdit
					? <EditQuestion resultContent={resultContent}/>
					: <Question resultContent={resultContent} /> 
				}
				<Will content={resultContent.content} />
				<AudioPart resultContent={resultContent} />
				<div className="row-container btn-wrapper">
					<ShareBtn />
					{
						isMyPage 
						? 
						(isYear?
							<Link to={`/mywill/edit/1`}>
							<button className="border-btn green-btn">수정하기</button>
							</Link>
							: ""
						)
						: 	
						<button
							className="border-btn green-btn"
							onClick={handleClickDelivery}>
							배달하기
						</button>

					}
					
				</div>
			</div>
			{isOpen && <KakaoModal setIsOpen={setIsOpen} />}
		</>
	);
};

export default Result;
