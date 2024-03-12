import React from 'react'
import { Link } from 'react-router-dom'



const CountryCard = ({country, index}) => {
          const {region,population,name,capital, flags} = country

  return (
           <>
              <Link to={`/${name}/${country.area}`} className='link'>
                <div className='card' key={index}>
                  <div className='image'>
                      <img src={flags.png}  title={name} height='100%' width='100%' />
                  </div>
                  <div className='content'>
                      <div className='name'>
                          <h3>{name}</h3>
                      </div>
                      <div className='info'>
                          <p>Population: <span>{population.toLocaleString()}</span></p>
                          <p>Region: <span>{region}</span></p>
                          <p>Capital: <span>{capital}</span></p>
                      </div>
                  </div>
                </div>
              </Link>
           </>
  )
}

export default CountryCard
