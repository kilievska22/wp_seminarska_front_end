import axios from '../custom-axios/axios'
import qs from 'qs'
const MembersService={
    fetchMembersPaged:(page, pageSize)=>{
        const params = {
            "page": page,
            "page-size": pageSize
        };
        return axios.get(`/members?page=${page}&page-size=2`)

    },

    deleteMember: (id) => {
        return axios.delete(`/members/${id}`);
    },
    editMember:(member)=>{
        const formParams=qs.stringify(member);

        const id=member.ESSN;
        return axios.patch(`/members/${id}`, formParams);

    },
    addMember: (member) => {
        console.log("add author");
        const formParams = qs.stringify(member);
        return axios.post("/members",formParams);
    },
    searchMember: (searchTerm) => {
        return axios.get(`/members/search?term=${searchTerm}`);
    },

}
export default MembersService