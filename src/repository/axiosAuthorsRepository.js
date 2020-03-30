import axios from '../custom-axios/axios'
import qs from 'qs'
const AuthorsService={
    fetchAuthorsPaged:(page, pageSize)=>{
        const params = {
            "page": page,
            "page-size": pageSize
        };
        return axios.get(`/authors?page=${page}&page-size=2`)

    },

    deleteAuthor: (id) => {
        return axios.delete(`/authors/${id}`);
    },
    editAuthor:(author)=>{
        const formParams=qs.stringify(author);

        const id=author.authorId;
        return axios.patch(`/authors/${id}`, formParams);

    },
    addAuthor: (author) => {
console.log("add author");
        const formParams = qs.stringify(author);
        return axios.post("/authors",formParams);
    },
    searchAuthor: (searchTerm) => {
        return axios.get(`/authors/search?term=${searchTerm}`);
    },
    getBorrowings: () => {

        return axios.get(`/authors/getBorrowings`);

    },

}
export default AuthorsService