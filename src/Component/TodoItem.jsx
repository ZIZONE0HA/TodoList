import './TodoItem.css'
import classNames from 'classnames';

const TodoItem = ({id,isDone,content,date,onUpdate,onDelete})=>{

    const onChangeCheckbox = () =>{
        onUpdate(id)
    }

    const onClickDelete = () =>{
        onDelete(id);
    }

    return(
        <div className="TodoItem">
            <input type="checkbox" checked={isDone} onChange={onChangeCheckbox}></input>
            <div className={classNames('content',{'done':isDone})}>{content}</div>
            <div className={classNames('date',{'done':isDone})} >{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );
}

export default TodoItem;