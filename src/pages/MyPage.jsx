import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../Mypage.css";

const MyPage = () => {
    //임시 데이터
    const [wills, setWills]=useState([
        {date:"2022-03-05"},
        {date:"2023-03-05"},
    ])
    useEffect(()=>{
        axios.get("/{userid}")
    })
    const renderWills=wills.map((will)=>{
        return(
            <div className="renderWills">
                    <div className='willsFormTitle'>
                        {will.date}의 유서
                    </div>
                    <button className='willsFormBtn'> &gt;&gt;</button>
            </div>
        )
    });
  return (
    <div className='container mypage'>
       <div className="myPageTitle">
			<div>유서함</div>
		</div>
        <div className="myPageMap">{renderWills}</div>
        <button className="blue-btn myPageBlueBtn">작성 완료</button>
    </div>
  )
}

export default MyPage