
export class HttpService {

    constructor(baseApiPath) {
      this.baseApi = baseApiPath;
    }
  
    async get(path) {
      const response = await fetch(`${this.baseApi}/${path}`, {
        headers: {
                  'Content-Type': 'application/json'
              }
      });
  
      return this._handleResponse(response);
    }
  
    async post(path, body) {
    
      const stringifiedData = JSON.stringify(body);
      const response = await fetch(`${this.baseApi}/${path}`, {
        method: 'POST',
        body: stringifiedData,
        headers: {
                  'Content-Type': 'application/json'
              }
      });
  
      return this._handleResponse(response);
    }
  
    async _handleResponse(response) {
      const parsedData = await response.json();
  
      if (response.ok) {
        return parsedData;
      }
  
      throw parsedData;
    }
  }