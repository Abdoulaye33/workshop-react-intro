import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@picocss/pico'
import Header from './Components/header'
import AddTodo from './Components/AddTodo'
import ListTodos from './Components/ListTodos'

function App() {
  const [count, setCount] = useState(0)

  const addNewTodo = (newTodoName) => {
    const newTodo = {
      id: todos.length.toString(),
      name: newTodoName,
      done: false
    }
    const newTodos = [...todos]
    newTodos.push(newTodo)
    setTodos(newTodos)
  }

  return (
    <>
      <main className="container">
        
      <AddTodo addNewTodo={addNewTodo} />

      <Header />

      <AddTodo />

      <ListTodos todos={todos} changeTodoStatus={changeTodoStatus}/>
      </main>
    </>
  )
}

export default App
