import React,{useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import _ from 'lodash/fp';
import { useHistory } from 'react-router-dom';
import { Span } from './FormRegister';
import { useForm } from 'react-hook-form';
import { loginEmail } from '../store/actions/authAction';
import { auth } from '../store/AuthSelector';

interface ILogin{
    username: string
    password: string
}


const FormLogin = () => {
    const isAuth = useSelector(auth);
     const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        if (isAuth) {
            history.push('/app')
        }
    },[isAuth,history])
    const { register,handleSubmit,errors} = useForm<ILogin>();
    const [user, setUser] = React.useState<ILogin>({ username: null!, password: null! });
    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = () => {
        dispatch(loginEmail(user))
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input onChange={onChangeHandle} name="username" type="text" 
                    ref={register({ required: true, maxLength: 20 })} />
                    {_.get("username.type", errors) === "required" && (<Span>Field is required</Span>)}
                    {_.get("username.type", errors) === "maxLength" && (<Span>20 length Only </Span>)}
                <input onChange={onChangeHandle} name="password" type="password" 
                    ref={register({ required: true, minLength: 8 })} />
                    {_.get("password.type",errors)=== "required" && (<Span>Password is required</Span>)}
                    {_.get("password.type",errors)=== "minLength" &&(<Span>Min Length 8</Span>)}
                <input type="submit" value="submit" />
            </form>
            
        </>
    )
}

export default FormLogin


// const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setUser(user);
// }