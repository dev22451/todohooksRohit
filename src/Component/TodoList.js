import React from 'react'
const TodoList = (props) => {
    const { todoList, handleCheck } = props;
    return (
        <div>
            {

                todoList.map((list, index) => {
                    const name = list
                    return (
                        <div className="todolist" key={index}>
                            <input type="checkbox" onChange={() => { handleCheck(index) }} />
                            < span > {name}</span>
                        </div>
                    )

                })

            }
        </div>
    )
}
export default TodoList