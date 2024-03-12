import React from 'react'
import { FaRegMoon } from "react-icons/fa";
import '../CSS/header.css'

const Header = ({theme, setTheme, SwitchTheme}) => {

  const toogle_mode =()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  console.log(SwitchTheme);

  const head = 'header' 

  return (
    <div className={`header ${theme+head}`} >
        <div className="left-side">
            <h1>Where in the world?</h1>
        </div>
        <div className="right-side">
            <div className='icon'>
                    <div className='toogle' onClick={SwitchTheme}>
                      <FaRegMoon className='red'/>
                      <span>Dark Mode</span>
                    </div>

            </div>
        </div>
      
    </div>
  )
}

export default Header
// export default 