import Header from './Header';
import Main from '../routes/Main'
import styled from 'styled-components';

const App = () => (
   <Container>
        <Header/>
        <Main />
    </Container>
)

const Container = styled.div`
    display:block;
    width: 1440px;
    height: 100vh;
`;


export default App;

