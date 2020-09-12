import React, { useState ,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Input } from 'antd'
import { ITodos } from '../store/types'
import { addTodo,clearCurrent,updateTodo } from '../store/actions/TodoAction';
import { current } from '../store/ShareData';
import firebase from '../../firebase';

const AddTodoForm = () => {
    const dispatch = useDispatch();
    const isCurrent = useSelector(current)
    const getId:string=firebase.firestore().collection('todos').doc().id;
    const [todo, setTodo] = useState<ITodos>({ id: '', title: '', completed: true });
    useEffect(() => {
        if (isCurrent !== null) {
            setTodo(isCurrent)
        } else { 
            setTodo({ id: getId, title: '', completed: true })
        }
        //eslint-disable-next-line
    }, [isCurrent])
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isCurrent === null) {
            dispatch(addTodo(todo))
            setTodo({ id: getId, title: '', completed: true }) // when submi it clear the previous value so id got new from getid
        } else {
            dispatch(updateTodo(todo))
            setTodo({ id: getId, title: '', completed: true })
        }
        clearAll();
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }
    const onSelect = () => {
        setTodo({ ...todo, completed: !completed })
    }
    const clearAll = () => {
        dispatch(clearCurrent());
    }
    const {id,title, completed } = todo;
        return (
        <>      
            <form onSubmit={onSubmit} style={{width:800}}>
                    <input type="number" value={id} name="id" onChange={onChange} autoComplete="off" style={{display:"none"}} />
                    <input type="text" value={title} name="title" onChange={onChange} autoComplete="off"/>
                    <input type="radio" name="completed" onClick={onSelect} defaultChecked={completed} />
                    <input type="radio"  name="completed"  onClick={onSelect} defaultChecked={completed}/>
                    <Input type="submit" value="Submit" style={{ backgroundColor: "blue", opacity: 0.5, color: "white", width: 100,cursor:"pointer" }} />
                    {isCurrent && <button onClick={clearAll} style={{ backgroundColor: "blue", opacity: 0.5, color: "white", width: 100 }}>Clear</button>}
            </form> 
       </>
    )
}

export default AddTodoForm