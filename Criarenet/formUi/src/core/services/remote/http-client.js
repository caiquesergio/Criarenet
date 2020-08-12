import Axios from 'axios';

const getClient = (baseUrl = "") => Axios.create({ 
    baseURL: baseUrl
});

class Client {
    constructor() {
        this.client = getClient("https://api.mocki.io/v1/");
    }

    get(url, conf = {}){
        return this.client.get(url, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }
}

export default Client;