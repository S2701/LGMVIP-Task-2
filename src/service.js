import axios from 'axios';

const API_URL = "https://reqres.in/api/users?page=1";

const getusers = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error)
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getusers,
};