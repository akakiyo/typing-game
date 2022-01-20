const { ApolloServer, gql } = require('apollo-server');
//const GoAPI = require('./datasource');
//const PersonalizationAPI = require('./persnalizeation-api');
var axios = require("axios");
const typeDefs = gql`
    type Result {
        AverageNum: Float
        CorrectRate: Float
        MissNum: Int
    }
    type Query{
       test: String 
       question: [String]
       result(CorrectNum: Int, TypeNum: Int, ElappsedTime: Float): Result
    }
`
const resolvers = {
    Query:{
        question: async () =>{
            //const response = await axios.get("http://10.0.2.15:31876/getQuestion");  OK
            const question_response = await axios.get("http://kiyo.com/go-api/getQuestion");
            return question_response.data.question;
        },
        result: async (parent,{CorrectNum,TypeNum,ElappsedTime}) =>　{
            const result_response = await axios.get(`http://kiyo.com/go-api/getResult?CorrectNum=${CorrectNum}&TypeNum=${TypeNum}&ElappsedTime=${ElappsedTime}`);
            return result_response.data;
        },
        test: ()=>{
            return 'get apigateway data'
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: ({ req }) => ({
    //     token: req.headers.authorization,
    //   }),    
    // dataSources: () => ({
    //     GoAPI : new GoAPI(),
    //     personalizationAPI: new PersonalizationAPI(),
    // }),
})

server.listen({ port: 4000 }).then(({ url }) => {
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
    
});
