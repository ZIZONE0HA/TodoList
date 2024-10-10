import { useState } from 'react';
import './List.css'
import TodoItem from './TodoItem';
const List = ({todos, onUpdate,onDelete}) =>{
    const [search,setSearch] = useState('');

    const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    }

    const getFilterdContent = () =>{
        if(search===''){
            return todos;
        } return todos.filter((todo)=>{
            return todo.content.toLowerCase().includes(search.toLowerCase());
        })
    }

    const filterData = getFilterdContent();


    return(
        <div className="List">
            <h4>Todo List 👽</h4>
            <input
            placeholder="검색"
            value={search}
            onChange={onChangeSearch}
            ></input>
            <div className="Todo_wapper">
                {filterData.map((todo)=>{
                    return <TodoItem key={todo.id} {...todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}/>
                })}
            </div>
        </div>
    );
}

export default List;