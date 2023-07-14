import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@picocss/pico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="container">
        Hello Worlds !
      </main>
    </>
  )
}

export default App
