import "./todo.css";
import { TbArrowBarToDown } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { create, remove } from "../redux/todoslice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    
  const [name, setName] = useState({
    id: uuidv4(),
    firstname: ""
  });

  const onTodoChange = (property, value) => {
    let newEdit = { ...name };

    newEdit[property] = value;
    setName(newEdit);
  };


  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);

  const onRemove = (id) => {
    dispatch(remove(id))
  }

  return (
    <div className="todo">
      <div>
        <input
          type="text"
          className="todo-input"
          placeholder="Create new todo..."
          id="firstname"
          value={name.firstname}
          onChange={(e) => onTodoChange("firstname",e.target.value)}
        />
        <button className="todo-btn" onClick={() => dispatch(create(name))}>
          <TbArrowBarToDown />
        </button>
        <div className="todolist">
          {todos.map((name) => (
            <div key={name.id} className="todos">
              <div>{name.firstname}</div>
              <div>
                <button className="edit-btn">
                  <BiEditAlt /> 
                </button>
                <button className="delete-btn" onClick={() => onRemove(name.id)}>
                  <MdOutlineDelete /> 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
