import React, { useContext } from 'react'
import { BatchContext } from './BatchProvider';


  const ExternalCompenent =() => {
    const {batchName ,batchType} = useContext(BatchContext


    );


  
  return (
    <div>
      <h4>Name : {batchName}</h4>
      <h4>Type : {batchType}</h4>
    </div>
  )
}

export default ExternalCompenent
