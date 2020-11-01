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


           const  name=author.name;
        const date_of_birth=author.date_of_birth;
        const biography=author.biography;
        const genre=author.genre;
        const author1={name, date_of_birth, biography,genre}
        const formParams=qs.stringify(author1);

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