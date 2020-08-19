import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { auth } from '../store/AuthSelector';
import {signout} from '../store/actions/authAction'



const Navigation = (): JSX.Element => {
    const isAuth = useSelector(auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const onLogOut = () => {
        dispatch(signout());
        history.replace('/')
    }

    return (
        <>
            <Wrapper>
                <Ul>
                    {isAuth ? ( 
                            <Ul>
                                <Li><NavLink to='/home'>Home</NavLink></Li>
                            <Li><NavLink to='/app'>App</NavLink></Li>
                            <Li><button onClick={onLogOut}>Log Out</button></Li>
                        </Ul>) :
                            (<Ul>
                                <Li><NavLink to='/'>Login</NavLink></Li>
                            <Li><NavLink to='/register'>Register</NavLink></Li>
                            
                            </Ul>)
                    }
                </Ul>
            </Wrapper> 
        </>
    )
}

export default Navigation;
const Wrapper = styled.div`
    height:50px;
    width:500px;
    display: block;
    flex-direction: row;

`;
const Ul = styled.ul`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Li = styled.li`
    list-style-type: none;

`;