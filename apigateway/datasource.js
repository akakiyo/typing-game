const { RESTDataSource } = require('apollo-datasource-rest');

class GoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://api.com';
  }

  async getQuestion() {
    const data = await this.get('/getQuestion')
    return  data.question
  }

  async getResult(CorrectNum,TypeNum,ElappsedTime) {
    const data = await this.get('/getResult', {
        CorrectNum: CorrectNum,
        TypeNum: TypeNum,
        ElappsedTime: ElappsedTime,
    });
    return data;
  }
}

module.exports = GoAPI;