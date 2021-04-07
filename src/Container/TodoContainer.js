import React, { useState } from 'react'
import { AddTodoInput, TodoList } from '../Component'

function TodoContainer() {

    const [todoList, setTodoList] = useState([])
    const [todoName, setTodoName] = useState('')


    const handleOnTodoName = (e) => {
        setTodoName(e.target.value)

    }
    const handleAddTodo = () => {
        setTodoList((todoList) => {
            return [...todoList, todoName];
        });
        setTodoName('')
    }
    return (
        <div className="todocontainer">
            <AddTodoInput
                todoName={todoName}
                handleOnTodoName={handleOnTodoName}
                handleAddTodo={handleAddTodo}
            />
            <TodoList todoList={todoList} />
        </div>
    )
}
export default TodoContainer