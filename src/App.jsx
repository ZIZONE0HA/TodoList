import { useRef, useState, useReducer, act, useCallback, createContext, useMemo } from 'react'
import './App.css'
import Editer from './Component/Editer'
import Header from './Component/Header'
import List from './Component/List'


const mockData = [
  {
    id:0,
    isDone: false,
    content:"스트레칭",
    date : new Date().getTime(),
  },{
    id:1,
    isDone: false,
    content:"영양제 먹기",
    date : new Date().getTime(),
  },{
    id:2,
    isDone: false,
    content:"물 1.5L 마시기",
    date : new Date().getTime(),
  }
];

function reducer (state,action) {
  switch(action.type){
    case "CREATE" :
      return [action.data, ...state];
    case "UPDATE" : 
        return state.map((item)=>item.id === action.targetId? {...item, isDone:!item.isDone}: item);
    case "DELETE" : 
      return state.filter((item)=>item.id !== action.targetId);
    case "DELETE_ALL" : 
      return [];
      default :
      return state;
      }
}

export const TodoStateContext = createContext();
export const TodoDipatchContext = createContext();


function App() {
  const [todos, dispatch] = useReducer(reducer,mockData);

  const idRef = useRef(3);

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
