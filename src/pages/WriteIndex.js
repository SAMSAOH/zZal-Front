import React from 'react'
import '../WriteIndex.css';
import '../Login.css';
const WriteIndex = () => {
  
    return (
      <div className="write container white-border-container">
       
        <div className="writeLine"> 
              <div className='writeIndexTextBox'>
                <div className='question'>Q1.당신의 이름은?</div>
                <div className='question inputMark'> &gt;&gt;</div>
                <textarea type="text" name="text" className='qnaInput'></textarea>
                <div className='nextBtn'>다음</div>
              </div>
        </div>
       
      </div>
    );
  
}

export default WriteIndex