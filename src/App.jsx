import { useRef, useState, useReducer } from 'react'
import './App.css'
import Editer from './Component/Editer'
import Header from './Component/Header'
import List from './Component/List'
// import Example from './Component/Example'

const mockData = [
  {
    id:0,
    isDone: false,
    content:"일1",
    date : new Date().getTime(),
  },{
    id:1,
    isDone: false,
    content:"할일2",
    date : new Date().getTime(),
  },{
    id:2,
    isDone: false,
    content:"할일3",
    date : new Date().getTime(),
  }
];



function App() {
  
  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(3);

  const onCreate = (content) =>{
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content:content,
      date : new Date().getTime(),
    }

    setTodos([newTodo,...todos]);
  }

const onUpdate = (targetId) =>{
  setTodos(todos.map((todo)=>
  todo.id === targetId ? {...todo, isDone : !todo.isDone}: todo));
}

const onDelete = (targetId)=>{
  setTodos(todos.filter((todo)=>
  todo.id !== targetId))
}

  return (
  <div className='App'>
    <Header/>
    <Editer onCreate={onCreate}/>
    <List todos={todos}
    onUpdate={onUpdate}
    onDelete={onDelete}/>
    {/* <Example/> */}
    
  </div>
  )
}

export default App
