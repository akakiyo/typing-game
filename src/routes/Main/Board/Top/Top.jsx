import styled from 'styled-components';

const Top = (props) => (
    <Container>
        <h1 className="title">NS-TYPING</h1>
        <h2 className="text">  数字・記号専用のタイピング練習ゲーム</h2>
        <button className="play-button" onClick={()=>{props.ChangeState(1);}}>プレイする</button>
    </Container>
)

const Container = styled.div`
    
    width: 1100px;
    height: 510px;
    margin :40px;
    background: #4A4A4A;
    border-radius: 20px;
    text-align:center;
    .title{

        font-size:50px;
        color:white;
        
    }
    .text{
        color:white;
    
    }
    .play-button{
        
        width: 169px;
        height: 54px;
        
        border-radius: 40px;
        background: #16C4FD;
        color: #FFFCFC;
    }
`;

export default Top;