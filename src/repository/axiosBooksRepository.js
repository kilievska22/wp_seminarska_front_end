import axios from '../custom-axios/axios'
import qs from 'qs'
const BooksService={
    fetchBooksPaged:(page, pageSize)=>{
        const params = {
            "page": page,
            "page-size": pageSize
        };
    return axios.get(`/books?page=${page}&page-size=2`)

    },
    fetchBooks:()=>{

        return axios.get(`/books`)

    },
    searchBook: (searchTerm) => {
        return axios.get(`/books/search?term=${searchTerm}`);
    },
    getBorrowings: () => {
        return axios.get(`/books/getBorrowings`);
    },
    deleteBook: (id) => {
        return axios.delete(`/books/${id}`);
    },
    editBook:(book)=>{
        const formParams=qs.stringify(book);

        const id=book.book_id;
        return axios.patch(`/books/${id}`, formParams);

    },
    addBook: (book) => {

        const formParams = qs.stringify(book);
        return axios.post("/books",formParams);
    },


}
export default BooksService