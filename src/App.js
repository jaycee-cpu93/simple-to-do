import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    { name: 'Buy Milk', isCompleted: false },
    { name: 'Buy Akara', isCompleted: false },
    { name: 'Buy Moi Mio', isCompleted: false },
  ]);
  const addToDo = (event) => {
    // event.preventDefault();
    // console.log('i want to do something');
    // console.log(todos);
    // setTodos([...todos, { name: todo, isCompleted: false }]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('i want to do something');
    console.log(todos);
    setTodos([...todos, { name: todo, isCompleted: false }]);
    setTodo('');
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const style = {
    color: "blue",
    borderColor: 'yellow',
    backgroundColor: "green"
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type="text" onChange={handleChange} value={todo} />
        <button style={style} type="submit">Add to do</button>
      </form>

      <div>
        {todos.map((todo, index) => (
          <p key={index}>{todo.name}</p>
        ))}
      </div>
    </div>
  );
}
