import './TodoItem.css'
import classNames from 'classnames';

const TodoItem = ({id,isDone,content,date,onUpdate, onDelete})=>{

    const onChangeCheckbox = () =>{
        onUpdate(id);
    }

    const onClickButton = () =>{
        onDelete(id);
    }

    return(
        <div className='TodoItem'>
            <input type='checkbox' checked={isDone} onChange={onChangeCheckbox}></input>
            <div className={classNames('contentbox',classNames({done:isDone}))}>
                <div className='content'>{content}</div>
                <div className='date'>{new Date(date).toLocaleDateString()}</div>
            </div>
            <button onClick={onClickButton}>삭제</button>
        </div>
    );
}

export default TodoItem;