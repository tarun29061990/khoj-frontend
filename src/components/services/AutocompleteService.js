import axios from 'axios';
import {config} from '../../config/env.js';

const getLocations = (query, count, sortBy) => {
    
    const url = config.hostName+"/query?term="+query+"&count="+count+"&sort="+sortBy;
    return axios({
        method: 'GET',
        url: url,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
}

export default {
    getLocations
}
