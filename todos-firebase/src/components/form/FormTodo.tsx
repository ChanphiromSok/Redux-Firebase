import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { useForm } from 'react-hook-form';
import {Input } from 'antd'
import { Todos } from '../store/types'
import { addTodo } from '../store/actions/TodoAction';
const AddTodoForm = () => {
    const dispatch = useDispatch();
    const { handleSubmit} = useForm<Todos>();
    const [todo, setTodo] = useState<Todos>({ id: 0, title: '', completed: true })
    const onSubmit = () => {
            dispatch(addTodo(todo))
        setTodo({ id: 0, title: '', completed: true })
    }
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }
    const onSelect = () => {
        setTodo({ ...todo, completed: !completed })
    }
    const {id,title, completed } = todo;
        return (
        <>      
            <form onSubmit={handleSubmit(onSubmit)} style={{width:800}}>
                    <input type="number" value={id} name="id" onChange={onChange} autoComplete="off" />
                    <input type="text" value={title} name="title" onChange={onChange} autoComplete="off" />
                    <input type="radio" name="completed" onClick={onSelect} defaultChecked={completed} />
                    <input type="radio"  name="completed"  onClick={onSelect} defaultChecked={completed}/>
                    <Input type="submit" value="Submit" style={{backgroundColor:"blue",opacity:0.5,color:"white",width:100}}/>
            </form> 
       </>
    )
}

export default AddTodoForm