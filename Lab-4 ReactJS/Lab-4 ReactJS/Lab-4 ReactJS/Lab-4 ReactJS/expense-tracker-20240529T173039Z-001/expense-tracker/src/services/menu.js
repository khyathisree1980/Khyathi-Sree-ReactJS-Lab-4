import axios from 'axios';
import IDataList from '../model/IDataList';

const getDataFromServer = () => {
    return axios.get(`http://localhost:3002/items`)
            .then( response => response.data )
};

const pushDataFromUser = ( newpurchase ) => {
    return axios.post(
        `http://localhost:3002/items`,
        newpurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then( response => response.data )
};

export { 
    getDataFromServer,
    pushDataFromUser 
}