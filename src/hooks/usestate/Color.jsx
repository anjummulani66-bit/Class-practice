import React, { useState } from 'react'

const Color = () => {

    const [color,setcolor] =useState('pink');
    
  return (
    <>
    <div style={{backgroundColor: color,height:'100px',width:'100px'}}>
      
    </div>
    <button onClick={() => setcolor('skyblue')}>Change color</button>
    </>
    
  )
}

export default Color
