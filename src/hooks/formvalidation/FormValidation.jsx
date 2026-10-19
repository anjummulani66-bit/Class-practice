import React, { useState } from 'react'

    const FormValidation = () => {
    const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: ""
})

function handleChange(e) {
    const { name, value } =e.target;
    setFormData({
        ...formData,
        [name]: value
    })
}

const [errors, seterrors] = useState({});

const validateForm = () => {

    let newErrors = {};

     if (formData.name === '') {
        newErrors.name = 'Name is mandatory';
    }

    if (formData.age === '') {
        newErrors.age = 'Age is mandatory'
    } else if (formData.age < 18) {
        newErrors.age = 'Age should be at least 18'
    }

    if (formData.email === '') {
        newErrors.email = 'Email is mandatory'
    }else if (!formData.email.endsWith('@gmail.com')) {
        newErrors.email = 'Email should end with "@gamil.com"'
    }

    if (formData.password === '') {
        newErrors.password = 'Password is madatory'
    } else if (formData.password.length < 8) {
        newErrors,password = 'Password should have at least 8 characters'
    }

    seterrors(newErrors);

    return Object.keys(newErrors).length === 0;
}

const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()){
        alert('Signup successful')
        setFormData({
            name: "",
            age: "",
            email: "",
            password: ""
        })
    }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input type="text"
         placeholder='Enter name'
         name='name'
         value={formData.name}
         onChange={handleChange}
         /> <br /> <br />
         {errors.name && <p>{errors.name}</p>}

        <input type="number"
        placeholder='Enter age'
        name='age'
        value={formData.age}
        onChange={handleChange}
        /> <br /> <br />
        {errors.age && <P>{errors.age}</P>}

        <input type='email'
        placeholder='Enter email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        /> <br /> <br />
         {errors.email && <P>{errors.email}</P>}

        <input type='password'
        placeholder='Enter password'
        name='password'
        value={formData.password}
        onChange={handleChange}
        /> 
        <br /> 
         {errors.password && <P>{errors.password}</P>}

         <button type='submit'> signup</button>
      </form>
    </div>
  )
}

export default FormValidation