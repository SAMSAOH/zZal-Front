import React from 'react'
import '../WriteIndex.css';

const WriteIndex = () => {
  return (
    <div className="App">
    <div className='container'>
        <div className='innerContainer'>
            <div className="writeIndexBox">
                <div className='writeIndexTextBox'>
                <h2>지금 가장 먹고싶은 음식은?</h2>
                <input type="text" name="text" className='qnaInput'></input>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WriteIndex