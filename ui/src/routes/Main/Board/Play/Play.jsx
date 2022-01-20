import styled from 'styled-components';

const Play = (props) => {
    return (
        <Container >
            <Description>表示された数字または記号のキーを押してください</Description>
            <Question data-testid="question" id="question">{props.question}</Question>
            <Under>
                <QuestionNum>問題数:{props.question_num}</QuestionNum>
                <AnswersNum>正解数:{props.correct_num}</AnswersNum>
                <BackButton onClick={() => props.ChangeState(0)}>タイトルに戻る</BackButton>
            </Under>
        </Container>
    )
}
const Container = styled.div`
    width: 900px;
    height: 510px;
    margin :40px;
    background: #4A4A4A;
    border-radius: 20px;
    text-align:center;
`;
const Description = styled.div`
    padding-top:50px;
    color:white;
`;
const Question = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    letter-spacing: 0.1em;
    color: #FFFFFF;

    padding:120px;
`;
const Under = styled.div`
    display:flex;
    justify-content: space-between;
    padding-left:100px;
    padding-right:100px;

`;
const QuestionNum = styled.div`
    color: #FFFFFF;
    display:inline-block;
`;
const AnswersNum = styled.div`
    display:inline-block;
    color: #FFFFFF;
`;
const BackButton = styled.button`
    color: #FFFCFC; 

    width: 169px;
    height: 54px;
    border-radius: 40px;
    background: #16C4FD;
`;
export default Play;