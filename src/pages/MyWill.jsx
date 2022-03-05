import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { questionList } from "../assets/objects/questionList";
import { Link } from "react-router-dom";
import "../MyWill.css"
const MyWill = () => {
    const { idx } = useParams();
    const [mywill, setMywill]=useState({});
    const [isYear, setIsYear]=useState(true);

    useEffect(() => {
      axios.get(`/detail/${idx}`)
      .then((res)=>{
        setMywill(res.data);
        const updateDate=new Date(mywill.createdDate);
        const now=new Date();
        if(updateDate.getMonth()<=now.getMonth() && updateDate.getDate()<=now.getDate()){
            setIsYear(true);
        }
      })
    }, [])

    const handleAudioPlay = () => {
		const ad = document.getElementById("record");
		ad.play();
	};
    
	return (
		<>
			<div className="result container result-container">
				<div className="label">
					<h2>{mywill.owner}의 유서</h2>
					<span>{mywill.createdDate}</span>
				</div>
				{questionList.map((q, idx) => (
					<section className="question-wrapper">
						<h3>Q{idx + 1 + "." + q}</h3>
						<span>{"내용"}</span>
					</section>
				))}
				<section>
					<h3 className="yellow-text">나의 유서</h3>
					<hr />
					<span>{""}</span>
				</section>
				<section>
					<h2 className="yellow-text row-container" onClick={handleAudioPlay}>
						음성 유서 <img src="../img/speaker.png" />
					</h2>
					<audio src="" id="record" />
				</section>
				<div className="row-container btn-wrapper">
                {
                    isYear
                    ? <div>
                        <button className="border-btn blue-btn mywillBtn">공유하기</button>
                        <Link to={`/mywill/edit/1`}>
                        <button className="border-btn green-btn mywillBtn">수정하기</button>
                        </Link>
                    </div>
                    : <button className="border-btn blue-btn">공유하기</button>
                }
					
				</div>
			</div>
		</>
	);

}

export default MyWill