import Header from './Header';
import Main from '../routes/Main';

import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';



const App = () => {
    return (
        <Container>
            <Header/>
            <Main/>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
`;
const client = new ApolloClient({
    uri: 'http://kiyo.com/apigateway/graphql'
})

const AppWithProvider = () => (
    <ApolloProvider client = {client}>
      <App />
    </ApolloProvider>
)
  
export default AppWithProvider;

