import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@picocss/pico'
import Header from './Components/header'
import AddTodo from './Components/AddTodo'
import ListTodos from './Components/ListTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    

      <main className="container">
        

      <Header />

      <AddTodo />

      <ListTodos todos={todos} changeTodoStatus={changeTodoStatus}/>



      </main>
    </>
  )
}

export default App
