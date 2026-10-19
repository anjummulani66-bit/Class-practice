import React, { useEffect, useRef, useState } from 'react'

const MyForm = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");


    const ip = useRef();

    useEffect(() => {
        ip.current.focus();
    }, [])


    return (
        <div>
            <input type="text"
                ref={ip}
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br />
            <h4>{name}</h4>

            <input type="number"
                placeholder='Enter age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
            /><br />
            <h4>{age}</h4>

            <input type="number"
                placeholder='Enter salary'
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            /><br />
            <h4>{salary}</h4>

        </div>
    )
}

export default MyForm
