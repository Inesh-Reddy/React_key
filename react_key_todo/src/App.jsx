import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/**
 * Let's create a simple todo that renders 3 todos

- create a todo component that accepts title, component as input.
- Initialise a state array that has 3 todos.
- Iterate over the array to render all todos.
- A button in the  top level app component to add todo.
 */

let counter =4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title:"Gym",
    description:"from 8 to 10",
  },{
    id:2,
    title:"Gym - 2",
    description:"from 9 to 11",
  },{
    id:3,
    title:"Gym - 3",
    description:"from 10 to 12",
  }])

  function addTodo(){
    setTodos([
      ...todos,
      {
      id:counter++,
      title: Math.random(),
      description: Math.random(),
      }
    ]);
  }

  return (
    <div>
     <button onClick={addTodo}> Add Todo</button>
     {todos.map(function(todo){
       return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
     })}
    </div>
  )
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h1>{description}</h1>
  </div>
}

export default App
