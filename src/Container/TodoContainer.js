import React, { useState } from 'react'
import { AddTodoInput, TodoList } from '../Component'

function TodoContainer() {

    const [todoList, setTodoList] = useState([])
    const [todoName, setTodoName] = useState('')
    // const [isCompleted, setIsCompleted] = useState(false)


    const handleOnTodoName = (e) => {
        setTodoName(e.target.value)

    }
    const handleAddTodo = () => {
        let refTodoList = [...todoList]
        refTodoList.push({
            name: todoName,
            isCompleted: false
        })
        // console.log(refTodoList);
        setTodoList((refTodoList) => {
            return [...refTodoList, todoName];
        });
        setTodoName('')
    }
    const removeTodoList = (index) => {
        const remove = [...todoList];
        remove.splice(index, 1);
        setTodoList(remove)
    }

    const handleCheck = (index) => {
        let refList = [todoList]
        console.log(refList);
        refList[index].isCompleted = true
        //     setIsCompleted(isCompleted => [...isCompleted, todoName]);
        setTodoList([...refList]);
    }

    return (
        <div className="todocontainer">
            <AddTodoInput
                todoName={todoName}
                handleOnTodoName={handleOnTodoName}
                handleAddTodo={handleAddTodo}
            />
            <TodoList todoList={todoList}
                handleCheck={handleCheck}
                removeTodoList={removeTodoList} />
        </div>
    )
}
export default TodoContainer