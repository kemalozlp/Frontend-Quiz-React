import React from 'react';
import { useEffect, useState } from 'react'
import './Question.css'


export default function QuestionReact({setShow, show, Quests, count, setCount}) {
  let widths = 46.5 * count;
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [theme]);
    function handleLast () {
      setCount(count + 1);
      setShow(2)
    }
  return (
    <div className="question"
    style={{
      display:`${show === 1 ? "grid" : "none"}`
    }}
    >
      
      <DarkMode theme={theme} setTheme={setTheme} />
      <SınavBaslangıcı theme={theme} setTheme={setTheme} handleLast={handleLast} widths={widths} Quests={Quests} count={count} />
    </div>
  )
}

function DarkMode({ theme, setTheme }) {
  return (
    <div className="header">
      <a href="#" className='modeLight'><span><img src="./image/Vector.svg" alt="" /></span><p>Accessibility</p></a>
      <div className="darkmode">
        <img src="./image/gunes.svg" alt="Güneş" />
        <label className="switch">
          <input type="checkbox" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
          <span className="slider round"></span>
        </label>
        <img src="./image/ay.svg" alt="ay" />
      </div>
    </div>
  )
}

function SınavBaslangıcı({handleLast, widths, Quests, count}) {
  return (
    <div className="boxed">
      <div className="boxedHeader">
        <div className="boxed-text">
          <p>Soru 6 / 10</p>
          <h1>{Quests.map(a => a.questions[count].question)}</h1>
        </div>
        <div className="bar">
          <div className="barStick"style={
            {
              width: widths
            }}>

          </div>
        </div>
      </div>
      <div className="startLight">
      {Quests.map(a => a.questions[count].chic.map((option, i) => (
            <button
              key={i} 
              >
              <span><p>{option}</p></span>
              <p>{a.questions[count].options[i]}</p>
            </button>
          )))}
        <button className='btn' onClick={handleLast}><p>Cevap Gönder</p></button>
      </div>
    </div >
  )
}


