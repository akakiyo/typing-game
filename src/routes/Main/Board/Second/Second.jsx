
import styled from 'styled-components';


const Second = (props) => {
    
    return (
        <Container>
            <div className="text">表示された数字または記号のキーを押してください</div>
            <div className="question">{props.question}</div>
            <div className="under">
                <div className="question-num">問題数: <div className="num">{props.question_num}</div></div>
                <div className="ansers-num">正解数: <div className="num">{props.correct_num}</div></div>
                <button className="back-button" onClick={() => props.ChangeState(0)}>タイトルに戻る</button>
            </div>
        </Container>
    )
}
const Container = styled.div`
    width: 1100px;
    height: 510px;
    margin :40px;
    background: #4A4A4A;
    border-radius: 20px;
    text-align:center;
    .text{
        padding-top:50px;
        color:white;
    }
    .question{
        padding:120px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 72px;
        line-height: 84px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
    }

    .under{
        display:flex;
        justify-content: space-between;
        padding-left:100px;
        padding-right:100px;
    }
    .question-num{
        display:inline-block;
        color: #FFFFFF;
        
    }
    .ansers-num{
        display:inline-block;
        color: #FFFFFF;
    }
    .num{
        display:inline-block;
        color: #FFFFFF;
    }
    .back-button{
        width: 169px;
        height: 54px;
        
        border-radius: 40px;
        background: #16C4FD;
        color: #FFFCFC;
    }

`;

export default Second;