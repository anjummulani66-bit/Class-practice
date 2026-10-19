import { createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider(){
    const userName= "Ayan";
    const age =22;
    return(
        <UserContext.Provider value ={{userName ,age}}>
            <h4>Hello, {userName}</h4>
            <ChildComp />
        </UserContext.Provider>
    );
}

function ChildComp(){
    return <AnotherComp />

}

function AnotherComp(){
    const {userName} =useContext(UserContext);

    return(
        <>
           <h3>Hello again, {userName}</h3>
           <ThirdComp />
            </>
    );
}

function ThirdComp(){
    const {userName , age} =useContext(UserContext);
    return<h2>Name: {userName}, Age: {age}</h2>
}