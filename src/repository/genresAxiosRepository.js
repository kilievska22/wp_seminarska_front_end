import axios from '../custom-axios/axios'
import qs from 'qs'
const GenresService={
    fetchGenresPaged:(page, pageSize)=>{
        const params = {
            "page": page,
            "page-size": pageSize
        };
        return axios.get(`/genres?page=${page}&page-size=2`)

    },
    fetchGenres:()=>{

        return axios.get(`/genres`)

    },
    searchGenre: (searchTerm) => {
        return axios.get(`/genres/search?term=${searchTerm}`);
    },
    getBorrowings: () => {

        return axios.get(`/genres/getBorrowings`);

    },
    deleteGenre: (id) => {
        return axios.delete(`/genres/${id}`);
    },
    editGenre:(genre)=>{
        const formParams=qs.stringify(genre);

        const id=genre.genre_id;
        return axios.patch(`/genres/${id}`, formParams);

    },
    addGenre: (genre) => {

        const formParams = qs.stringify(genre);
        return axios.post("/genres",formParams);
    },


}
export default GenresService