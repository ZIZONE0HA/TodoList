import { useRef, useState, useReducer, act } from 'react'
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

function reducer(state, action){
  switch(action.type){
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : return state.map((item)=>
      item.id === action.targetId ? {...item, isDone : !item.isDone} : item)
    case "DELETE" : return state.filter((item)=>
      item.id !== action.targetId);
    default : return state;
  }
}



function App() {
  const [todos, dispatch] = useReducer(reducer,[mockData]);

  const idRef = useRef(3);

  const onCreate = (content) =>{
    dispatch({
      type:"CREATE",
      data : {
        id: idRef.current++,
        isDone: false,
        content: content,
        date : new Date().getTime(),
      }
    });
  }

const onUpdate = (targetId) =>{
  dispatch({
    type:"UPDATE",
    targetId : targetId,
  });
}

const onDelete = (targetId)=>{
  dispatch({
    type:"DELETE",
    targetId: targetId,
  });
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
