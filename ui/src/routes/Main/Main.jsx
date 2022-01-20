import styled from 'styled-components';
import Board from './Board';

const Main= () => (
    <Container>
        <Board/>
    </Container>
)
const Container = styled.div`
    display:flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height:90%;
    background: #F17816;
`;
export default Main;