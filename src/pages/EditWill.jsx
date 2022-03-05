import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { questionList } from "../assets/objects/questionList";

const EditWill = () => {
    const {willId}=useParams();
    const [mywill, setMywill]=useState({});
    

    useEffect(() => {
      axios.get(`/detail/${willId}`)
      .then((res)=>{
        setMywill(res.data);
      })
    }, [])

    const handleAudioPlay = () => {
		const ad = document.getElementById("record");
		ad.play();
	};
    const onChange=useCallback(e=>{
        //set으로 각 속성값 변경 =>post로 수정 보내기
    })

  return (
    <div className="result container result-container">
    <div className="label">
        <h2>{mywill.owner}의 유서</h2>
        <span>{mywill.createdDate}</span>
    </div>
    {questionList.map((q, idx) => (
        <section className="question-wrapper">
            <h3>Q{idx + 1 + "." + q}</h3>
            <input
                value={"내용"}
                onChange={onChange()}
            >
            </input>
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
    <button className="border-btn green-btn mywillBtn">수정하기</button>
        
    </div>
</div>

  )
}

export default EditWill