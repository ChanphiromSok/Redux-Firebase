import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo,setCurrent } from '../components/store/actions/TodoAction';


const TodoList = ({data}:any) => {
    const dispatch = useDispatch();
    const onDelete=React.useCallback(() => {
        dispatch(deleteTodo(id))
        // eslint-disable-next-line
    }, [dispatch])
    const onSetCurrent = () => {
        dispatch(setCurrent(data))
    }
    const {id, title, completed } = data;
    
    return (
        <>
            <h3>{title} isCompleted: {completed ? 'True' : 'False'}</h3>
            <button onClick={onDelete}> Delete</button>
            <button onClick={onSetCurrent}>Edit</button>
        </>
    )
}

export default TodoList;
