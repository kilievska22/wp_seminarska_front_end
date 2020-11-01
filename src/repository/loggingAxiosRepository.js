import axios from '../custom-axios/axios2'
import qs from 'qs'
const loggingService={

    addUser: (user) => {

        const formParams = qs.stringify(user);
        return axios.post("/users/sign-up",user);
    },
    registerUser: (user) => {

        const formParams = qs.stringify(user);
        return axios.post("/login",user);
    },


}
export default loggingService;