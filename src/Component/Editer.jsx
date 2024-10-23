import { useRef, useState } from 'react';
import './Editer.css'

const Editer = ({onCreate}) =>{

    const [content, setContent] = useState("");
    const contentRef = useRef('');

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }

    const onSubmit=()=>{
        if(content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }

    const onKeyDown=(e)=>{
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    return(
        <div className="Editer">
            <input
            placeholder='Todo...'
            value={content}
            ref={contentRef}
            onChange={onChangeContent}
            onKeyDown={onKeyDown}
            ></input>
            <button onClick={onSubmit} >추가</button>
        </div>
    );
}

export default Editer;