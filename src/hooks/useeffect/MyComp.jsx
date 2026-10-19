import React, { useEffect, useState } from 'react'

const MyComp = () => {

    const [count, setCount] =useState(0);


//useEffect (function ,dependency array);
//case 1-->no dependency array


   // useEffect(() =>{
       // console.log('component rendered')
   // })

   //case2 -->Empty array
   //useEffect(()=>{
    //console.log("Component mounted")
   //},[])



// case3-->Passing a particular value to the array
const[ct1,setCt1] =useState(0);
const [ct2, setCt2] =useState(100);

useEffect(() => {
    console.log("Counter Updated")
},[ct1])

   return (
    <div>
      {/* <button onClick={() => setCount(count+1)}>Count:{count}</button> */}
      <h3>Counter 1 :{ct1}</h3>
      <button onClick={() => setCt1(ct1 +1)}>+</button>
      <h3>Counter 2 :{ct2}</h3>
      <button onClick={() => setCt2(ct2 +2)}>-</button>
      
    </div>
  )
}

export default MyComp
