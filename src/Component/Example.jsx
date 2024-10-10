import { useReducer } from "react";
//reducer : 변환기
// => 상태를 실제로 변화시키는 변환기 역할
//reducer(현재상태, 액션객체-어떻게 바뀌길 원하는지)
function reducer(state, action){
    console.log(state,action);
    //reducer함수에서 새로운 state값을 반환하면
    //useReducer가 반환한 값을 불러와서 state를 변경함 
    switch(action.type){
        case "INCREASE" : return state + action.data;
        case "DECREASE" : return state - action.data;
        default : return state;
    }
}


const Example = () =>{
    //dispatch : 급송하다  
    //=> 상태변화가 있어야 한다는 사실을 알릴는 함수 (상태를 요청하기만하는 함수)
    //useReducer(상태변화를 실제 처리하게될 함수 호출, 초기값)
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () =>{
        //dispatch의 인수 : 상태가 어떻게 변화되길 원하는지 보냄
        //보통 객체를 전달함. => 액션객체
        dispatch({
            type:"INCREASE", //값을 증가시켜달라
            data: 1,         //1만큼
        });
    }

    const onClickMinus = () =>{
        dispatch({
            type:"DECREASE",
            data:1,
        });
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
}

export default Example;