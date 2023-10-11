import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1>Budgeting Application</h1>
      <form action="/url" method="GET">
        <p>Please enter the Expense name and Cost</p>
        <input type="text" name="expenseName" placeholder="Expense Name" />
        <input type="text" name="expenseCost" placeholder="Cost" />
        <button type="submit">Add Expense</button>
      </form>
    </>
  )
}

export default App
