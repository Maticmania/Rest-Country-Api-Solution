import React, { useEffect, useState } from 'react'
import '../CSS/cardpage.css'
import data from '../DB/data.json'
import { FiSearch } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import CountryCard from './CountryCard';



const CardPage = ({theme, setTheme}) => {
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState('')
    const [mapData, setmapData] = useState(data)

    const region = Array.from(new Set(data.map((item)=>(
        item.region
    ))))

        const africa = data.filter((country)=>{
            return country.region == 'Africa'

        })

        const asia = data.filter((country)=>{
            return country.region == 'Asia'
        })
        const europe = data.filter((country)=>{
            return country.region == 'Europe'
        })
        const oceania = data.filter((country)=>{
            return country.region == 'Oceania'
        })
        const americas = data.filter((country)=>{
            return country.region == 'Americas'
        })
        const polar = data.filter((country)=>{
            return country.region == 'Polar'
        })
        const antarctic = data.filter((country)=>{
            return country.region == 'Antarctic'
        })
        const antarcticOcean = data.filter((country)=>{
            return country.region == 'Antarctic Ocean'
        })


        

    const handleChange =(e)=>{
            // console.log(e.target.value)
            setSelected(e.target.value)
           
            // }else if( selected === 'Europe'){
            //     setmapData(europe)
            // }else if( selected === 'Oceania'){
            //     setmapData(oceania)
            // }else if( selected === 'Americas'){
            //     setmapData(americas)
            // }else if( selected === 'Polar'){
            //     setmapData(polar)
            // }else if( selected === 'Antarctic'){
            //     setmapData(antarctic)
            // }else if( selected === 'Antarctic Ocean'){
            //     setmapData(antarcticOcean)
            // }else if(selected === 0){
            //     setmapData(data)
            // }
    }

    useEffect(()=>{
        console.log("Country changed!", selected);
        // setmapData
        if(selected == 'Africa'){
            setmapData(africa)
        }else if( selected == 'Asia'){
           setmapData(asia)
        }else if( selected === 'Europe'){
                setmapData(europe)
        }else if( selected == 'Oceania'){
            setmapData(oceania)
        }else if( selected == 'Americas'){
            setmapData(americas)
        }else if( selected == 'Polar'){
            setmapData(polar)
        }else if( selected == 'Antarctic'){
            setmapData(antarctic)
        }else if( selected == 'Antarctic Ocean'){
            setmapData(antarcticOcean)
        }else if(selected == 0){
                setmapData(data)
        }
    }, [selected])
        // console.log(selected)

        // const grid = 'grid'
        // console.log(theme)
  return (
    <main>
        <div className='card-container'>
        <div className='controls'>
        <div className='left'>
            <input type="text" 
                onChange={(e)=> setSearch(e.target.value.toLowerCase().trim()) }
            placeholder='Search for a country...' />
            <span><IoSearch/></span>
        </div>
        <div className='right'>
            <select value={selected}  onChange={(e)=> handleChange(e) } >
                <option value="0">Filter by Region</option>
                {region.map((continent, index)=>{
                    return(
                        <option key={index+1} value={continent}>{continent}</option>
                    )
                })}
            </select>
        </div>
        </div>
        <div className= 'card-grid' >
         
         {mapData.filter((item) =>{
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
            }).map((country, index) =>(

                <CountryCard country={country} key={index}/>
            ))}
        </div>

    </div>
    </main>
   
  )
}

export default CardPage
