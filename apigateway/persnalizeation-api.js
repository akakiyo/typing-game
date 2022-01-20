const { RESTDataSource } = require('apollo-datasource-rest');

class PersonalizationAPI extends RESTDataSource {
  
    willSendRequest(request,resonse) {
      request.headers.set('Access-Control-Allow-Headers', 'Content-Type');
      request.headers.set('Access-Control-Allow-Origin', '*');
      request.headers.set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET');
      request.headers.set('Authorization', this.context.token);
      request.headers.set('Content-Type', 'application/json');
      
    }
  }

  module.exports = PersonalizationAPI;