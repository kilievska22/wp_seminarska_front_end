import axios from '../custom-axios/axios1'
import qs from 'qs'
const EditionsService={

    addEdition: (edition) => {

        const formParams = qs.stringify(edition);
        return axios.post("/editions",formParams);
    },
    fetchEditions:()=>{

        return axios.get(`/editions`);

    },


}
export default EditionsService;