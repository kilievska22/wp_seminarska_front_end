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
        const title=genre.title;
        const period=genre.period;
        const description=genre.description;
        const genre1={title,period,description}
        const formParams=qs.stringify(genre1);
       console.log(genre.title)
        const id=genre.genre_id;
        const id1=JSON.stringify(id);
        console.log(id);
        return axios.patch(`/genres/${id}`, formParams);

    },
    addGenre: (genre) => {

        const formParams = qs.stringify(genre);
        return axios.post("/genres",formParams);
    },


}
export default GenresService