import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../Mypage.css";

const MyPage = () => {
    const [wills, setWills]=useState([
        {date:"2022-03-05"},
        {date:"2023-03-05"},
    ])
    const renderWills=wills.map((will)=>{
        return(
            <div className="renderWills">
                <div className='willsForm'>
                    <div className='willsFormTitle'>{will.date}의 유서</div>
                    <button className='willsFormBtn'></button>
                </div>
            </div>
        )
    });
  return (
    <div className='container mypage-container mypage'>
        <div className='myPageTitle'>유서함</div>
        <div className="myPageMap">{renderWills}</div>
    </div>
  )
}

export default MyPage