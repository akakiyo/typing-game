import styled from 'styled-components';

const Top = (props) => (
    <Container>
        <Title>NS-TYPING</Title>
        <Description>  数字・記号専用のタイピング練習ゲーム</Description>
        <PlayButton onClick={()=>{props.ChangeState(1);}}>プレイする</PlayButton>
    </Container>
)

const Container = styled.div`
    width: 900px;
    height: 510px;
    background: #4A4A4A;
    border-radius: 20px;
    
    text-align:center;
    margin :40px;
`;
const Title = styled.h1`
    font-size:50px;
    color:white;
`;
const Description = styled.h2`
    color:white;
`;
const PlayButton = styled.button`
    color: #FFFCFC;

    width: 169px;
    height: 54px;
    border-radius: 40px;
    background: #16C4FD;
    
`;

export default Top;