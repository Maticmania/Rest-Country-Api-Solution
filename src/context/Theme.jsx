import React, {useState, createContext} from "react";

// creating theme context
const PageTheme = createContext({
    theme: 'light',
    toggleTheme: ()=>{},
})

//Provider functions
const ThemeContext = ({children})=>{
    const [theme, setTheme] = useState('light')
        const toggleTheme =() =>{
            setTheme(PrevTheme => (PrevTheme  ==='light' ? 'dark' : 'light'))
        } 
    return (
        <PageTheme.Provider value={{theme, toggleTheme}}>
            {children}
        </PageTheme.Provider>
    ) 
}


export {PageTheme, ThemeContext}