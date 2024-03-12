import React, { useState } from 'react'
import './CSS/App.css'
import Header from './Component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPage from './pages/CardPage'
import CountrySelected from './pages/CountrySelected'
import useLocalStorage from 'use-local-storage';




function App() {

  const [theme2, setTheme2] = useLocalStorage('theme' ? 'dark' : 'light')

  const SwitchTheme = () =>{
    const newTheme = theme2 == 'light' ?'dark' : 'light';
    setTheme2(newTheme)
  }

   const [theme, setTheme] = useState('light')

  return (
    <div className={`body ${theme}`} dark-theme={theme2}>

      <BrowserRouter>
      <Header theme={theme2} setTheme={setTheme} SwitchTheme={SwitchTheme}/>
      <Routes>
        <Route theme={theme} setTheme={setTheme}  path='/' element={<CardPage/>} />
        <Route  setTheme={setTheme} path='/:name/:area' element={<CountrySelected/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
