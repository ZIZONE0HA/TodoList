import { useState } from 'react';
import './List.css'
import TodoItem from './TodoItem';
const List = ({todos,onUpdate,onDelete}) =>{

    const [search,setSerch] = useState('');

    const onChangeSearch =(e)=>{
        setSerch(e.target.value);
    }

    const getFilteredData=()=>{
        if(search ===""){
            return todos;
        }
        //배열의 모든 todo item을 순회하면서
        return todos.filter((todo)=>
            //이 연산의 값이 참이되는 todo를 필터링
            //:todo의 content에 search한 내용이 포함되어있을시
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    const filterdTodos = getFilteredData();

    return(
        <div className="List">
            <h4>Todo List 👽</h4>
            <input
            placeholder="검색"
            value={search}
            onChange={onChangeSearch}
            ></input>
            <div className="Todo_wapper">
                {/* 반환값들을 모아서 새로운 배열로 */}
                {filterdTodos.map((todo)=>{
                    return(
                        // 리스트된 요소드를 구분할 때 key라는 props로 구분할 수 있어야해
                        <TodoItem
                        key={todo.id} 
                        {...todo} 
                        onUpdate={onUpdate}
                        onDelete={onDelete}/>
                    )})}
            </div>
        </div>
    );
}

export default List;