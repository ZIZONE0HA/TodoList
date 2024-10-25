import { useCallback, useContext, useMemo, useState } from 'react';
import './List.css'
import TodoItem from './TodoItem';
import { TodoDipatchContext, TodoStateContext } from '../App';
import classNames from 'classnames';
import DeleteAllModal from './DeleteAllModal';


const List = () =>{

    const todos = useContext(TodoStateContext);
    const {onDeleteAll} = useContext(TodoDipatchContext);

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    }

    const getFilteredData = () =>{
        let filteredTodos = todos;
        
        //완/미완 필터링
        if(filter === 'done'){
            filteredTodos = todos.filter((todo)=>todo.isDone);
        } else if(filter ==='notDone'){
            filteredTodos = todos.filter((todo)=>!todo.isDone);
        }

        //검색어 필터링
        if(search !== ''){
            filteredTodos = filteredTodos.filter((todo)=>
                todo.content.toLowerCase().includes(search.toLowerCase()));
        }
        return filteredTodos;
    }

    const filteredData = getFilteredData();

    const {totalCount,doneCount,notDoneCount} =
    useMemo(()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount,doneCount,notDoneCount};
    },[todos]); 


    //전체삭제 모달
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const confirmDeleteAll = useCallback(()=>{
        onDeleteAll();
        closeModal();
    },[onDeleteAll]);

    
    return(
        <div className="List">
            <div className='count'>
                <div className= {classNames('count-item all',{active:filter ==='all'})}
                onClick={()=>setFilter('all')}>
                    🔥 To do <span>{totalCount} </span> </div>
                <div className= {classNames('count-item done',{active:filter ==='done'})}
                onClick={()=>setFilter('done')}>
                    👌 Finish <span>{doneCount} </span> </div>
                <div className={classNames('count-item notDone',{active:filter ==='notDone'})}
                onClick={()=>setFilter('notDone')}>
                    👏 Rest <span>{notDoneCount} </span> </div>
            </div>

            <input value={search}
            placeholder='Search'
            onChange={onChangeSearch}
            ></input>

            <button className='deleteAll' onClick={openModal}>Delete All</button>
            <DeleteAllModal open={isModalOpen} onClose={closeModal} onConfirm={confirmDeleteAll}/>

            <div className="todo-wapper">
                {/* todo가 없을 때 */}
                {todos.length === 0 ? (
                    <div className='epmty-message'>
                        👾 Try adding a new Todo!
                    </div>    

                    // 필터링 된 데이터가 없을 때
                ) : filteredData.length ===0 ? (
                    <div className='epmty-message'>
                        👻 There is no search result
                    </div>
                ) : (
                    // 필터링된 데이터 있을 때
                        filteredData.map((todo)=>
                <TodoItem key={todo.id} {...todo} />))}
            </div>
        </div>
    );
}

export default List;