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
import { questionList } from "../../assets/objects/questionList";
import "../Result.css";
const Result = () => {
    const {willId}=useParams();
	const [resultContent, setResultContent] = useState({});
    
	useEffect(() => {
		axios.get(`/will/detail/${willId}`).then((res) => setResultContent(res.data));
	}, []);
   
    const onSubmit=()=>{
        axios.put(`/update/${willId}`,resultContent)
        .then(console.log("suc"));
    }
	return (
		<>
			<div className="result container result-container">
				<Header owner={resultContent.owner} />	
				{questionList.map((q, idx) => (
				<section className="question-wrapper" key={idx}>
					<h3>Q{idx + 1 + "." + q}</h3>
					<input
                    placeholder={resultContent[`answer${idx + 1}`]}
                    onChange={(e)=>setResultContent[`answer${idx + 1}`](e.target.value)}
                    >
                    </input>
				</section>
			    ))}
				<Will content={resultContent.content} />
				<AudioPart resultContent={resultContent} />
				<div className="row-container btn-wrapper">
					<button className="border-btn green-btn" onClick={onSubmit}>수정하기</button>
				</div>
			</div>
		</>
	);
};

export default Result;