import React from 'react';
import { useEffect, useState } from 'react';
import './QuizApp.css'


export default function QuizAppReact({handleShow, show}) {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [theme]);
  return (

    <div className="container"
    style={{
      display:`${show === 0 ? "grid" : "none"}`
    }}
    >
      <DarkMode theme={theme} setTheme={setTheme} />
      <Started theme={theme} setTheme={setTheme} handleShow={handleShow} />
    </div>

  )
}

function DarkMode({theme, setTheme}) {
  return (
    <div className="darkmode">
      <img src="./image/gunes.svg" alt="Güneş" />
      <label className="switch">
        <input type="checkbox" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}/>
        <span className="slider round"></span>
      </label>
      <img src="./image/ay.svg" alt="ay" />
    </div>

  )
}

function Started({handleShow}) {
  return (
    <div className="box">
      <div className="container-text">
        <h2>Frontend Sınavına Hoşgeldiniz!</h2>
        <p>Başlamak için bir konu seçin.</p>
      </div>
      <div className="startmenu">
        <button className='htmlbox' onClick={handleShow}><img src="./image/html.svg" alt="Html" /><p>HTML</p></button>
        <button className='cssbox' onClick={handleShow}><img src="./image/css.svg" alt="css" /><p>CSS</p></button>
        <button className='jsbox' onClick={handleShow}><img src="./image/javascript.svg" alt="js" /><p>JAVASCRIPT</p></button>
        <button className='accbox' onClick={handleShow}><img src="./image/accessibility.svg" alt="accesbility" /><p>ERİŞEBİLİRLİK</p></button>
      </div>

    </div>

  )
}


