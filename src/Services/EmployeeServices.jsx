import axios from 'axios';

class Services {
    login(data){
        console.log(" login in axios service ",data);   
    return   axios.post('https://localhost:44359/api/User/login',data);
    }

    register(data){
        console.log(" register in axios service ",data);
    return   axios.post('https://localhost:44359/api/User/register',data);
    }

   
}
export default Services;