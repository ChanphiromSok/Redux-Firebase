import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterTodosAction } from './components/store/actions/TodoAction';



const FilterTodos = () => {
    const dispatch = useDispatch();
    const inputEl = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputEl.current?.value === null) {
            inputEl.current.value='';
        }
    }, [])
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterTodosAction(e.target.value))
    }
    return (
        <form>
            <input ref={inputEl} onChange={onChange} type="text" />
        </form>
    )
}

export default FilterTodos
