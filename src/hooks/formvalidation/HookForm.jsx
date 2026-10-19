import React from 'react';
import {useForm} from 'react-hook-form'

const HookForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState:{
            errors
        }
    } = useForm();

    const formSubmit =()=>{
        alert('success!')
        reset()
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit(formSubmit)}>
            <input type="text"
                placeholder='enter name '
                autoFocus
                {...register('name',{
                    required: 'name is mandatory'
                })}
            /> <br />
            {errors.name && <p>{errors.name.message}</p>}

            <input type="number"
                placeholder='enter age '
                
                {...register('age',{
                    required: 'age is mandatory',
                    min : {
                        value: 18,
                        messages: "age should be >=18"
                    }
                })}
            /> <br />
            {errors.age && <p>{errors.age.message}</p>}

            <input type="password"
                placeholder='enter email '
                
                {...register('email',{
                    required: 'email is mandatory',
                    pattern: {
                        value: /^[A-Za-z0-9]+@gmail\.com$/,
                        messages: "mail should be a valid gmail id"
                    }
                })}
            /> <br />
            {errors.email && <p>{errors.email.message}</p>}

            <input type="password"
                placeholder='enter password '
                
                {...register('password',{
                    required: 'password is mandatory',
                    pattern: {
                        value: 8,
                        messages: "password should be at least 8 characters long "
                    }
                })}
            /> <br />
            {errors.password && <p>{errors.password.message}</p>}  


            <button type="submit">signup </button>  

        </form>
    </div>
  );
}

export default HookForm;