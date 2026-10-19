import React from 'react'
import { useState } from 'react'

const UseState2 = () => {
    const [brand, setBrand]= useState("Mercedes");
    const [country,setCountry]= useState("German");
  return (
    <div>
      <h2>{brand}is the best {country} Manufacturer</h2>
      <button onClick={()=>setBrand("BMW")}>Change Brand</button>
      <button onClick={()=>setCountry("India")}>Change Country</button>

    </div>
  )
}

export default UseState2
