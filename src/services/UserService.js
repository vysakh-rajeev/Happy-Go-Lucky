import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/users";

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
