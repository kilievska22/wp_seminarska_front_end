import axios from '../custom-axios/axios1'
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

            const name=member.name;
        const  membership_start=member.membership_start;
        const membership_expiration=member.membership_expiration;
        const email=member.email;
        const phone=member.phone;
        const member1={name,membership_start,membership_expiration,email,phone}
        const formParams=qs.stringify(member1);

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