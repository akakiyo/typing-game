import { useEffect,useState,} from 'react';
import styled from 'styled-components';
import checkKey from './utils/checkKey';
import Top from './Top';
import Play from './Play';
import Result from './Result';

import { gql } from 'apollo-boost';
import {useQuery } from '@apollo/react-hooks';

export const GET_QUESTION_QUERY = gql`{ question }`

const Board = () => {
    const { loading, error, data } = useQuery(GET_QUESTION_QUERY);//文字列をApolloServerから取得
    const [state,setState] = useState(0);//表示する画面の判別　0:Top 1:Secone 2:Result
    const [question, setQuestion]=useState();//表示する問題
    const [keyName, setKeyName] = useState();//入力されたキーを格納
    const [correct_num, setCorrectNum] = useState(0); //正解数
    const [type_num, setTypeNum] = useState(0); //タイピング数
    const [question_num, setQuestionNum] = useState(10); //問題数
    const [start_time,setStartTime] =useState(); //ゲーム開始時間
    const [elapsed_time, setElapsedTime] = useState(); //経過時間

    const ChangeState = (num) => {
        setState(num);
    };

    //初期化
    const reset = (question) => {
            setCorrectNum(0);
            setQuestionNum(10);
            setTypeNum(0);
            setStartTime();
            setElapsedTime();
            if(question !== undefined){
                let rnd = Math.floor(Math.random() * question.length)
                console.log(question[rnd]);
                setQuestion(question[rnd]);
            }
    };

    //ページが変更された時の処理
    useEffect(()=>{
        if(state===1&&start_time===undefined){//Play画面に遷移時
            setStartTime(new Date());
        }else if(state===2){                    //Result画面に遷移時
            let end_time = new Date();
            setElapsedTime(end_time.getTime() - start_time.getTime());
        }else if(state===0&&data!==undefined){   //Top画面に遷移時
            reset(data.question);
        }
    },[state,start_time,data]);

    //タイピングされた時の処理
    useEffect(()=>{
        if(state===1){
        const handlClick = (e) => {
            if (!(e.key==='Shift' || e.key==='Alt' || e.key==='Meta')) {
                setKeyName(e.key);
                setTypeNum(()=>type_num+1);
            }
        };
            
        document.addEventListener('keydown',handlClick);
        
        let correct = checkKey(question,keyName);
        //正しい入力時の処理
        if(correct===true){
            setKeyName(null);
            let rnd = Math.floor(Math.random() * data.question.length)
            console.log(data.question[rnd])
            setQuestion(data.question[rnd]);
            setCorrectNum(()=>correct_num+1);
            setQuestionNum(()=>question_num-1);
            if(question_num===1){
                ChangeState(2);
            } 
        }
        return ()=> {document.removeEventListener('keydown',handlClick)};
    }   
    },[correct_num,question_num,keyName,question,type_num,state,data]);


    if (loading){
        return <Loading>Loading...</Loading>
    }
    if (error) {
      return <Error>Error...</Error>
    }

    return(
    <Container id="container">
        {
            state===0 ? <Top ChangeState={ChangeState}/>
                :state===1 ? <Play ChangeState={ChangeState} question={question} correct_num={correct_num} question_num={question_num}/>
                    :   <Result ChangeState={ChangeState} elapsed_time={elapsed_time} correct_num={correct_num} question_num={question_num} type_num={type_num}/>
        }
    </Container>
    );
}

const Container = styled.div`
    width: 1000px;
    height: 579px;
    margin :50px;
    background: #FFB23B;
    box-shadow: 5px 5px 4px #000000;
    border-radius: 20px;
`;
const Loading = styled.h3`
    position:relative;
    text-align:center;
`;
const Error = styled.h3`
    position:relative;
    text-align:center;
`;

export default Board;