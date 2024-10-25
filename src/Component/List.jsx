import { useContext, useMemo, useState } from 'react';
import './List.css'
import TodoItem from './TodoItem';
import { TodoStateContext } from '../App';
import { CalendarCheck } from 'react-bootstrap-icons';


const List = () =>{

    const todos = useContext(TodoStateContext);

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
            <div className='count'>
                <div className='count-item'>🔥 To do <span>{totalCount}</span> </div>
                <div className='count-item'>👌 Finish <span>{doneCount}</span> </div>
                <div className='count-item'>👏 Rest <span>{notDoneCount}</span> </div>
            </div>
            <input value={search}
            placeholder='Search'
            onChange={onChangeSearch}
            ></input>
            <div className="todo-wapper">
                {filteredData.length === 0 ? (
                    <div className='epmty_message'>
                        <CalendarCheck className="calendar-icon"/>
                        새로운 일정을 추가해 보세요!
                    </div>    
                ) : (
                        filteredData.map((todo)=>
                <TodoItem key={todo.id} {...todo} />))}
            </div>
        </div>
    );
}

export default List;