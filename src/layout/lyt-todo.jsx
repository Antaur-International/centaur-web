import React from 'react'
import axios from 'axios'
import { SingleTick, HamBurger } from '../icons/Icons'


export default function TodoLayout({ user }) {

    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        axios
            .get(`http://localhost:5000/task/personal/${user._id}`)
            .then(res => {
                setTodos(res.data.tasks);
                console.log(res.data.tasks);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])


    const listItem = todos.map((todo, index) => (
        <li className='wrapper_todo_item'>
            <p className='todo_item_date'>{todo.task_deadline}</p>
            <div className='todo_item_main'>
                <div className='item_main_dragIcon'>
                    <HamBurger />
                </div>
                <label className='m_container'>
                    <input type={'checkbox'} className="checkbox_done" />
                    <span class="checkmark"></span>
                </label>
                <div className='item_main_todoText'>
                    <p>{todo.task_cat}</p>
                    <p>{todo.task_title}</p>
                </div>
            </div>
        </li>
    ))

    return (
        <ul className='lyt_todo_wrapper'>
            {
                todos.length > 0 ? listItem : <p className='no_todo_text'>No Todo's</p>
            }
        </ul>
    )
}
