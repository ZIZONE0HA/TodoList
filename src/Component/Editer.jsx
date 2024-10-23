import { useContext, useRef, useState } from 'react';
import './Editer.css'
import { TodoContext } from '../App';

const Editer = () =>{

    const {onCreate} = useContext(TodoContext);

    const [content,setContent] = useState('');

    const contentRef = useRef('');

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }

    const onKeyDown = (e) =>{
        if(e.keyCode === 13)
            onSubmit();
    }

    const onSubmit = () =>{
        if(content==""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }

    return(
        <div className="Editer">
            <input value={content}
            placeholder='To do...'
            ref={contentRef}
            onChange={onChangeContent}
            onKeyDown={onKeyDown}
            ></input>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editer;