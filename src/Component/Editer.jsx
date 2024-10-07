import { useRef, useState } from 'react';
import './Editer.css'

const Editer = ({onCreate}) =>{
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }


    //어떤 키를 눌렀는지는 e.keyCode에 저장
    const onKeyDown =(e)=>{
        //13 === enter
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    const onSubmit=()=>{
        //빈문자열 추가시 데이터 넘기지x, input폼에 focus
        if(content ===""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        //content추가 이후 input창 ''로 초기화(비움)
        setContent("");
    }
    return(
        <div className="Editer">
            <input
            ref={contentRef}
            value={content}
            //onKeyDown : 사용자가 키보드를 누를 때 발생하는 이벤트
            onKeyDown={onKeyDown}
            onChange={onChangeContent}
            placeholder="Add Todo..."></input>
            <button onClick={onSubmit} >추가</button>
        </div>
    );
}

export default Editer;