import React, { createContext } from 'react'

export const BatchContext = createContext();

function BatchProvider({children}) {
    const batchName ='K222';
    const batchType = 'FSB';
    
    
    return(
        <BatchContext.Provider value={{ batchName ,batchType}}>
            {children}
        </BatchContext.Provider>
    );
}

export default BatchProvider
