const { ApolloServer, gql } = require('apollo-server-lambda');
const axios = require('axios');

const typeDefs = gql`
    type Result {
        AverageNum: Float
        CorrectRate: Float
        MissNum: Int
    }
    type Query{
       question: [String]
       result(CorrectNum: Int, TypeNum: Int, ElappsedTime: Float): Result
    }
`
const resolvers = {
    Query:{
        question: async () =>{
            let get_data_question;
            await axios 
                .get("https://v8kum1uxg8.execute-api.ap-northeast-1.amazonaws.com/default/getQuestion")
                .then((res) => {
                    get_data_question = res.data;
                })
                .catch((err)=>{
                    return err;
                })
                return get_data_question;
        },
        result: async (parent,{CorrectNum,TypeNum,ElappsedTime}) =>　{
            let get_data_result;

            await axios 
                .get(`https://qm35c9kyn8.execute-api.ap-northeast-1.amazonaws.com/default/getResult?CorrectNum=${CorrectNum}&TypeNum=${TypeNum}&ElappsedTime=${ElappsedTime}`)
                .then((res) => {
                    get_data_result = res.data;
                })
                .catch((err)=>{
                    return err;
                })
                return get_data_result;
        },
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context
    })
})

exports.handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true
    }
})

