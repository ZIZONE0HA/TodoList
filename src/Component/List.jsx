import { useContext, useMemo, useState } from 'react';
import './List.css'
import TodoItem from './TodoItem';
import { TodoContext } from '../App';
const List = () =>{

    const {todos} = useContext(TodoContext);

    const [search, setSearch] = useState('');

    const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    }

    const getFilteredData = () =>{
        if(search===''){
            return todos;
        }
        return todos.filter((todo)=>
        todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredData = getFilteredData();

    const {totalCount,doneCount,notDoneCount} =
    useMemo(()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount,doneCount,notDoneCount};
    },[todos]); 


    return(
        <div className="List">
            <h4>Todo List 👽</h4>
            <div>
                <div>오늘의 할 일 : {totalCount}</div>
                <div>끝낸 일 : {doneCount}</div>
                <div>남은 일 : {notDoneCount}</div>
            </div>
            <input value={search}
            placeholder='검색'
            onChange={onChangeSearch}
            ></input>
            <div className="Todo_wapper">
                {filteredData.map((todo)=>
                <TodoItem key={todo.id} {...todo} />)}
                
            </div>
        </div>
    );
}

export default List;