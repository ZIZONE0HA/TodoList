import './TodoItem.css'
import { memo, useContext } from 'react';
import classNames from 'classnames';
import { TodoDipatchContext } from '../App';

const TodoItem = ({id,isDone,content,date})=>{

    const {onUpdate,onDelete} = useContext(TodoDipatchContext);

    const onChangeCheckbox = () =>{
        onUpdate(id);
    }

    const onClickButton = () =>{
        onDelete(id);
    }

    return(
        <div className='TodoItem'>
            <input type='checkbox' checked={isDone} onChange={onChangeCheckbox}></input>
            <span className="custom-checkbox" onClick={onChangeCheckbox}></span>
            <div className={classNames('contentbox',classNames({done:isDone}))}>
                <div className='content'>{content}</div>
                <div className='date'>{new Date(date).toLocaleTimeString()}</div>
            </div>
            <button onClick={onClickButton}>X</button>
        </div>
    );
}

export default memo(TodoItem);