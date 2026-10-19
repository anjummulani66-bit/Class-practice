import React, { createContext, useContext } from 'react'


const NameContext =createContext();


const NameProvider = () => {

const name = 'Abcd';
 const age =20;


  return (
    <NameContext.Provider value={{name,age}}>
        <h4>Hello, {name} from NameProvider</h4>
        <Component2 />
    </NameContext.Provider>
  );
};


const Component2 =() =>{
    return <Component3 />
}


const Component3 =() => {
    const { name } =useContext(NameContext);

    return<h3>Name: {name}</h3>
}


export default NameProvider
