import { useRef, useState } from 'react'
import './App.css'
import Editer from './Component/Editer'
import Header from './Component/Header'
import List from './Component/List'

function App() {
  const mockData = [{
    id:0,
    isDone:false,
    content:"한입리액트",
    date: new Date().getTime(),
  },
  {
    id:1,
    isDone:false,
    content:"스트레칭",
    date: new Date().getTime(),
  },
  {
    id:2,
    isDone:false,
    content:"알스알",
    date: new Date().getTime(),
  },
];

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate =(content)=>{
    const newTodo={
      id:idRef.current++,
      isDone:false,
      content: content,
      date: new Date().getTime(),
    }
    // spread연산자로 toods에 있는 값을 쭉늘여놓고, 그 앞에 새로 추가하려녀는 객체 추가
    setTodos([newTodo,...todos]);
  }

  const onUpdate = (targetId) =>{
    //todos State 의 값들 중
    //targetId와 일치하는 id를 갖는 투두 아이템의 isDone변경

    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열을 전달
    //todos객체의 모든 요소(todo)를 순회하면서
    setTodos(todos.map((todo)=>
      //현재 순회중인 todo의 id가 수정대상의id(targetId)와 일치한다면
      todo.id === targetId
      //스프레드 연산자로 기존 todo 요소들은 그대로 펼쳐주고 isDone의 값을 토글
        ?{...todo, isDone: !todo.isDone}
        //일치하지 않는다면 그대로 반환
        : todo
      ));
  }


  const onDelete=(targetId)=>{
    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    //todos배열을 필터링할건데, 모든 todo를 순회하면서 todo.id 값이 targetId와 같지 않은 요소들만 필터링
    //즉, 삭제 대상이 아닌 요소들로 새로운배열을 만들어서 인수로 전달!
    setTodos(todos.filter((todo)=> todo.id !== targetId));
  }

  return (
  <div className='App'>
    <Header/>
    <Editer onCreate={onCreate}/>
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
  </div>
  )
}

export default App
