import React from 'react'

const Country = ({ SelectedCountry }) => {
  return (
    <div>
        <h1>Detail page</h1>
      <h1>{SelectedCountry.name}</h1>
    </div>
  )
}

export default Country
