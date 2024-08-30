import React from 'react';
import { useEffect, useState } from 'react';
import './ScoreLight.css'

export default function ScoreLight({setShow, show}) {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [theme]);
  function handleStart (){
    setShow(0);
  }
  return (
    <div className="scorelight"
    style={{
      display:`${show === 2 ? "grid" : "none"}`
    }}
    >
      <DarkMode theme={theme} setTheme={setTheme} />
      <Score theme={theme} setTheme={setTheme} handleStart={handleStart} />


    </div>
  )
}

function DarkMode({ theme, setTheme }) {
  return (
    <div className="mode">
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

function Score({handleStart}) {
  return (
    <div className="scored">
      <div className="scored-text">
        <p>Sınav Tamamlandı</p>
        <h1>Senin Skorun...</h1>
      </div>
      <div className="conclusion">
        <div className="text">
          <a href="#" className='vector'><span><img src="./image/Vector.svg" alt="" /></span><p>Accessibility</p></a>
          <h1>8</h1>
          <p>10 Üzerinden</p>
        </div>
        <button className='tryagain' onClick={handleStart}>Tekrar Oyna</button>
      </div>
    </div>
  )
}








