import React from 'react'
import { RiDeleteBack2Fill } from 'react-icons/ri';
const TodoList = (props) => {
    const { todoList, handleCheck, removeTodoList } = props;
    return (
        <div>
            {

                todoList.map((list, index) => {
                    const name = list
                    const isCompleted = list
                    return (
                        <div className="todolist" key={index}>
                            <input type="checkbox" checked={isCompleted} onChange={() => { handleCheck(index) }} />
                            {name}
                            {isCompleted === true && <span style={{ color: 'red' }}>Completed</span>}
                            <span onClick={() => removeTodoList(index)}><RiDeleteBack2Fill /></span>
                        </div>
                    )

                })

            }
        </div>
    )
}
export default TodoList