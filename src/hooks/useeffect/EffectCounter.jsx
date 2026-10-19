import React, { useEffect, useState } from 'react'

const EffectCounter = () => {

     const [count, setCount] =useState(0);
    
    useEffect(()=>{
        setTimeout(() => {
            setCount(count +1)
        },1000);

    })
  return (
    <div>
      <h3>count :{count}</h3>
    </div>
  )
}

export default EffectCounter
