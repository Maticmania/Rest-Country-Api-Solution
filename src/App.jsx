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


  return (
    <div  dark-theme={theme2}>

      <BrowserRouter>
      <Header theme={theme2} setTheme={setTheme2} SwitchTheme={SwitchTheme}/>
      <Routes>
        <Route path='/' element={<CardPage/>} />
        <Route path='/:name/:area' element={<CountrySelected/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
