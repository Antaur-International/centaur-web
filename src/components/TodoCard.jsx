import React from 'react'
import "./todoCard.css"

const TodoItem = (props) => {
    return <li className='todoItem'>
        <div>
            <p>{props.todo.date.month}</p>
            <p>{props.todo.date.day}</p>
        </div>
        <div>
            <p>{props.todo.title}</p>
            <p>{props.todo.category}</p>
        </div>
    </li>
}



function TodoCard() {
    const todos = [
        {
            date: {
                month: "Jan",
                day: "1"
            },
            title: "Meeting with client",
            category: "Office"
        },
        {
            date: {
                month: "Sep",
                day: "18"
            },
            title: "AJP Practical",
            category: "College"
        }, {
            date: {
                month: "Sep",
                day: "18"
            },
            title: "AJP Practical",
            category: "College"
        }
    ]
    return (
        <ul className='todoCard'>
            {todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
        </ul>
    )
}

export default TodoCard