import styled from 'styled-components';

const Header = () => (
    <Container>
        <Title>
            NS-TYPING
        </Title>
    </Container>
)

const Container = styled.div`
    width: 100%;
    height: 109px;
    left: 0px;
    top: 0px;
    background: #FFBF5D;
`;
const Title = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 112px;
    letter-spacing: 0.1em;
    color: #FFFFFF;

    width:100%;
    text-align: center;
`;
export default Header;