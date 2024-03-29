/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import { HamBurger } from "../icons/Icons";
import { API_HOST } from "../API/constant";
import { EmptyTaskList } from "../components/EmptyState/EmptyTaskList";
import { useAuth } from "../data/Context/UserContext";

export default function TodoLayout() {
  const { userInstance } = useAuth();

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${API_HOST}/task/personal/${userInstance._id}`)
      .then((res) => {
        setTodos(res.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const listItem = todos.map((todo, index) => (
    <li className="wrapper_todo_item">
      <p className="todo_item_date">{todo.task_deadline}</p>
      <div className="todo_item_main">
        <div className="item_main_dragIcon">
          <HamBurger />
        </div>
        <label className="m_container">
          <input
            type={"checkbox"}
            onChange={(e) => {
              if (e.target.checked) {
                axios
                  .delete(`${API_HOST}/task/${todo._id}`)
                  .then((res) => {
                    // console.log(res.data);
                    sessionStorage.setItem(
                      "deletedTask",
                      JSON.stringify(res.data.task)
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }}
            className="checkbox_done"
          />
          <span class="checkmark"></span>
        </label>
        <div className="item_main_todoText">
          <p>{todo.task_cat}</p>
          <p>{todo.task_title}</p>
        </div>
      </div>
    </li>
  ));

  return (
    <ul className="lyt_todo_wrapper">
      {todos.length > 0 ? listItem : <EmptyTaskList />}
    </ul>
  );
}
