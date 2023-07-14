import React, { useState } from 'react';

export default function ListTodos() {
  let initTodos = [
        {
            id: '1',
            name: 'être reconnaisante',
            done: 'true'
        },
        {
            id: '2',
            name: 'Apprendre React',
            done: 'false'
        },
        {
            id: '3',
            name: 'Rager sur LOL',
            done: 'true'
        }
  ];

  const [todos, setTodos] = useState(initTodos);

  const handleCheckboxClick = (e) => {
    const newTodos = todos.map((todo) => {
        if (todo.id === e.target.id) {
            todo.done = !todo.done
        }
        return todo
    })
    setTodos(newTodos)
  }

  return (
    <section>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" id='todo.id' checked={todo.done} onClick={handleCheckboxClick}/>
            {todo.name}
          </li>
        ))}
      </ul>
      <button >Add a todo</button>
    </section>
  );
}
