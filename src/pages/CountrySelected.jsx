import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import data from '../DB/data.json'
import '../CSS/CountrySelected.css'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";


const CountrySelected = () => {
  const {area} = useParams();

    const CountrySelect = data.find((country)=> country.area === parseInt(area));
    console.log(CountrySelect)

  const {name, nativeName,population,topLevelDomain,currencies,languages,region,subregion,capital,flag,borders} = CountrySelect
  return (
    <>
      <section>
        <div className='container'>
          <div className='go-back-btn'>
            <Link to='/'>
              <button className='back-btn'>
              <span><FaArrowLeft /></span>
                Back
              </button>
            </Link>
          </div>
          <div className="country-detail">
            <div className="country-flag">
              <img src={flag} title={`${name} flag`} />
            </div>
            <div className="country-info">
              <div className='info'>
                <div className='c-name'>
                  <h1>{name}</h1>                    
                </div>
                <div className='middle-info'>
                    <div className="middle-left">
                      <p>Native Name: <span>{nativeName}</span></p>
                      <p>Population: <span>{population.toLocaleString()}</span></p>
                      <p>Region: <span>{region}</span></p>
                      <p>Sub Region: <span>{subregion}</span></p>
                      <p>Capital: <span>{capital}</span></p>
                      
                    </div>
                    <div className="middle-right">
                      <p>Top Level Domain: <span>{topLevelDomain}</span></p>
                      <p>Currencies: <span>{currencies[0].name}</span></p>
                      <p>Languages: 
                            {languages.map((language, index)=>(
                              
                                <span key={index}>{language.name}</span>
                            ))}                  
                      </p>  
                    </div>
                </div>
                <div className='bottom'>
                    <p>Border Countries:
                     {borders &&  borders.map((border, index)=>(
                         <button key={index}>{border}</button>
                      ))}
                    </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default CountrySelected
