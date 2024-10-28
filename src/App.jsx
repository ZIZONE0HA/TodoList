import { useRef, useState, useReducer, act, useCallback, createContext, useMemo, useEffect } from 'react'
import './App.css'
import Editer from './Component/Editer'
import Header from './Component/Header'
import List from './Component/List'





function reducer (state,action) {
  let nextStage;

  switch(action.type){
    case "INIT":
      return action.data;
    case "CREATE" :
      nextStage = [action.data, ...state];
      break;
    case "UPDATE" : 
      nextStage= state.map((item)=>item.id === action.targetId? {...item, isDone:!item.isDone}: item);
      break;
    case "DELETE" : 
      nextStage = state.filter((item)=>item.id !== action.targetId);
      break;
    case "DELETE_ALL" : 
      nextStage = [];
      break;
    default :
      return state;
  }

  localStorage.setItem("todos",JSON.stringify(nextStage));
  return nextStage;
}

export const TodoStateContext = createContext();
export const TodoDipatchContext = createContext();


function App() {
  const [todos, dispatch] = useReducer(reducer,[]);
  const idRef = useRef(0);

  useEffect(()=>{
    const storedData = localStorage.getItem("todos");
    if(!storedData){
      return;
    }

    const parsedData = JSON.parse(storedData);

    if(!Array.isArray(parsedData)){
      return;
    }
    
    let maxId = 0;
    parsedData.forEach((item)=>{
      if(Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    });

    idRef.current = maxId +1;

    console.log(maxId);

    dispatch({
      type:"INIT",
      data:parsedData
    });
  },[])

  const onCreate = (content) =>{
    dispatch({
      type:"CREATE",
      data:{
        id: idRef.current++,
        isDone:false,
        content:content,
        date : new Date().getTime(),
      }
    });
  }

  const onUpdate = useCallback((targetId)=>{
    dispatch({
      type:"UPDATE",
      targetId: targetId,
    });
  },[]);
  
  const onDelete = useCallback((targetId)=>{
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  },[]);

  const onDeleteAll = useCallback(()=>{
    dispatch({
      type: "DELETE_ALL"
    });
  },[])


  const memoizedDispatch = useMemo(()=>{
    return { onCreate, onUpdate, onDelete, onDeleteAll};
  },[]);

  return (
  <div className='App'>
    <Header />
    <TodoStateContext.Provider value={todos}>
      <TodoDipatchContext.Provider value={memoizedDispatch}>
        <Editer/>
        <List/>
      </TodoDipatchContext.Provider>
    </TodoStateContext.Provider>
  </div>
  )
}

export default App
