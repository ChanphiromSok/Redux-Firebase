import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { useForm } from "react-hook-form";

import _ from 'lodash/fp';
import { registerEmail } from '../store/actions/authAction';
import { IUser } from '../store/AuthType';



const FormRegister = () => {
    const dispatch = useDispatch();
    const [reg,setReg] = React.useState<IUser>({username:null!,password:null!})
    const {errors,register,handleSubmit } = useForm<IUser>();
    const onSubmitReg = () => {
        dispatch(registerEmail(reg))
        console.log(reg)
        setReg({username:'',password:''});
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReg({...reg,[e.target.name]:e.target.value})
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitReg)}>
                <input 
                    name="username"
                   
                    onChange={onChangeHandler}
                    type="text"
                    ref={register({ required: true, maxLength: 20 })} />
                    {_.get("username.type", errors) === "required" && (<Span>Field is required</Span>)}
                    {_.get("username.type", errors) === "maxLength" && (<Span>20 length Only </Span>)}
                <input 
                    name="password"
                    
                    onChange={onChangeHandler}
                    type="password"
                    ref={register({ required: true, minLength: 8 })} />
                    {_.get("password.type",errors)=== "required" && (<Span>Password is required</Span>)}
                    {_.get("password.type",errors)=== "minLength" &&(<Span>Min Length 8</Span>)}
                

                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default FormRegister
export const Span = styled.span`
    color: red;
`;