import axios from '../custom-axios/axios'
import qs from 'qs'
const PenaltiesService={
    fetchPenaltiesPaged:(page, pageSize)=>{

        const params = {
            "page": page,
            "page-size": pageSize
        };
        return axios.get(`/penalties?page=${page}&page-size=2`)

    },

    deletePenalty: (id) => {
        return axios.delete(`/penalties/${id}`);
    },
    getUnpaidTodayPenalties: () => {
        return axios.get(`/penalties/dueDateToday`);
    },
    payPenalty: (id) => {
        return axios.get(`/penalties/pay/${id}`);
    },
    searchPenalty: (searchTerm) => {
        return axios.get(`/penalties/search?term=${searchTerm}`);
    },
    addPenalty: (penalty) => {

        const formParams = qs.stringify(penalty);
        return axios.post("/penalties",formParams);
    },


}
export default PenaltiesService