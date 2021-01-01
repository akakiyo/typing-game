import { useEffect,useState } from 'react';
import styled from 'styled-components';
import getQuestion from './utils/getQuestion';
import checkKey from './utils/checkKey';
import Top from './Top';
import Second from './Second';
import Result from './Result';


const Board = () => {
    const [state,setState] = useState(0);//表示する画面の判別　0:Top 1:Secone 2:Result
    const [question, setQuestion]=useState(getQuestion());//表示する問題
    const [keyName, setKeyName] = useState();//入力されたキーを格納
    const [correct_num, setCorrectNum] = useState(0); //正解数
    const [type_num, setTypeNum] = useState(0); //タイピング数
    const [question_num, setQuestionNum] = useState(10); //問題数
    const [start_time,setStartTime] =useState(); //ゲーム開始時間
    const [elapsed_time, setElapsedTime] = useState(); //経過時間

    const handlClick = (e) => {
        console.log(e.key);
        if (!(e.key==='Shift')) {
            setKeyName(e.key);
            setTypeNum(()=>type_num+1);
        }
    };
    
    const ChangeState = (num) => {
        setState(num);
    };

    //初期化
    const reset = () => {
            setCorrectNum(0);
            setQuestionNum(10);
            setTypeNum(0);
            setStartTime();
            setElapsedTime();
    };

    //タイピングされた時の処理
    useEffect(()=>{
        document.addEventListener('keydown',handlClick);
        
        let correct = checkKey(question,keyName);
        //正しい入力時の処理
        if(correct===true){
            setQuestion(getQuestion());
            setCorrectNum(()=>correct_num+1);
            setQuestionNum(()=>question_num-1);
            if(question_num===1){
                ChangeState(2);
            } 
        }
        return ()=> {document.removeEventListener('keydown',handlClick)};   
    },[type_num]);
    
    //ページが変更された時の処理
    useEffect(()=>{
        if(state===1){
            setStartTime(new Date);
        }else if(state===2){
            let end_time = new Date();
            setElapsedTime(end_time.getTime() - start_time.getTime());
        }else if(state===0){
            reset();
        }
    },[state])

    return(
    <Container>
        {
            state===0 ? <Top ChangeState={ChangeState}/>
                :state===1 ? <Second ChangeState={ChangeState} question={question} correct_num={correct_num} question_num={question_num}/>
                    :   <Result ChangeState={ChangeState} elapsed_time={elapsed_time} correct_num={correct_num} question_num={question_num} type_num={type_num}/>
        }
    </Container>
    );
}

const Container = styled.div`
    width: 1156px;
    height: 579px;
    margin :50px;
    background: #FFB23B;
    box-shadow: 5px 5px 4px #000000;
    border-radius: 20px;
`;

export default Board;