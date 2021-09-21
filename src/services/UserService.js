import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/users";
//const BASE_URL = "https://89c0-202-164-138-131.in.ngrok.io/api/v1/users";

class UserService {

    getUsers(){
        return axios.get(BASE_URL);
    }

    addUser(user)
    {
        return axios.post(BASE_URL, user);
    }

    getEvents(){
        return axios.get(BASE_URL + '/events');
    }

    getUserById(userId)
    {
        return axios.get(BASE_URL + '/' + userId);
    }

}

export default new UserService()