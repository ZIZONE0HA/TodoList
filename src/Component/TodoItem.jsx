import './TodoItem.css'
import { memo, useContext } from 'react';
import classNames from 'classnames';
import { TodoContext } from '../App';

const TodoItem = ({id,isDone,content,date})=>{

    const {onUpdate,onDelete} = useContext(TodoContext);

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

export default memo(TodoItem);