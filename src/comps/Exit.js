import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    login:yup.string().required().min(4),
    password:yup.string().required().min(4),
});

const Exit = () => {

    const {register, handleSubmit, errors} = useForm({
        resolver:yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    console.log(errors)

    return (
        <div className="container-login">
            <div className="login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        label="Login"
                        type="text"
                        name="login"
                        ref={register}
                    />
                    <p>{errors.login?.message}</p>
                    <input 
                        type="password" 
                        label="Password"
                        name="password"
                        ref={register} 
                    />
                    <p>{errors.password?.message}</p>
                    <button type="submit">click</button>
                </form>
            </div>
        </div>
    )
}

export default Exit
