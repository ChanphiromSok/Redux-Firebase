import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { token ,auth,isLogged} from '../store/AuthSelector';
import {signout} from '../store/actions/authAction'
import firebase from '../../firebase';


const Navigation = (): JSX.Element => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isToken = useSelector(token)
    const isAuth = useSelector(auth)
    const onLogOut = () => {
        dispatch(signout());
        history.push('/login')
        firebase.auth().signOut().then(() => {
            console.log('Sign out');
        })
        window.location.reload();
    }
    return (
        <>
            <Wrapper>
                <Ul>
                    { isToken ||isAuth ? ( 
                            <Ul>
                                <Li><NavLink to='/home'>Home</NavLink></Li>
                                <Li><NavLink to='/'>App</NavLink></Li>
                                <Li><button onClick={onLogOut}>Log Out</button></Li>
                            </Ul>)
                            :
                            (<Ul>
                                <Li><NavLink to='/login'>Login</NavLink></Li>
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