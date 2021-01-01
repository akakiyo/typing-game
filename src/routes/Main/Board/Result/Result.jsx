import styled from 'styled-components';

const Result = (props) => {
    //経過時間
    let m, s, ms, second, minute;
    s = Math.floor(props.elapsed_time / 1000);
    m = Math.floor(s / 60);
    ms = (('00' + (props.elapsed_time % 6000)).slice(-3)).slice(0, 2);
    second = ('00' + s).slice(-2);
    minute = ('00' + m).slice(-2);

    //平均キータイプ数
    let average_num = (props.correct_num / (props.elapsed_time / 1000)).toFixed(1);
    //ミスタイプ数
    let miss_num = (props.type_num - props.correct_num).toString();
    //正解率
    let correct_rate = ((props.correct_num / props.type_num) * 100).toFixed(2);


    return (
        <Container>
            <div className="title">結果</div>
            <Content>
                <div className="information">
                    <div className="result">・経過時間:<div className="value">{minute}:{second}:{ms}</div></div>
                    <div className="result">・正しく打ったキーの数:<div className="value">{props.correct_num}</div></div>
                    <div className="result">・平均キータイプ数:<div className="value">{average_num}</div>回/秒</div>
                    <div className="result">・ミスタイプ数:<div className="value">{miss_num}</div></div>
                    <div className="result">・正解率:<div className="value">{correct_rate}</div>%</div>
                </div>
                <div className="back">
                    <button className="back-button" onClick={() => props.ChangeState(0)}>タイトルに戻る</button>
                </div>
            </Content>
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
    .title{
    padding-top:50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    text-align:center;
    }
    
`;
const Content = styled.div`
    display:flex;
    justify-content:space-between;
    .information{
        padding-left:150px;
        text-align:left;
    }
    .result{
    margin-bottom:50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    }
    .value{
    display:inline-block;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #16C4FD;
    }
    .back{
        padding-right:100px;
        padding-top:250px;
    }
    .back-button{
        width: 169px;
        height: 54px;

        
        border-radius: 40px;
        background: #16C4FD;
        color: #FFFCFC;
    }
`;

export default Result;