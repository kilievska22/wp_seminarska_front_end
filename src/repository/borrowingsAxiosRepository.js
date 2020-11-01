import axios from '../custom-axios/axios1'
import qs from 'qs'
const BorrowingsService={
    fetchBorrowingsPaged:(page, pageSize)=>{
        console.log("enter");
        const params = {
            "page": page,
            "page-size": pageSize
        };
        return axios.get(`/borrowings?page=${page}&page-size=2`)

    },

    deleteBorrowing: (id) => {
        return axios.delete(`/borrowings/${id}`);
    },
    returnBorrowing: (id) => {
        return axios.get(`/borrowings/return/${id}`);
    },
    searchBorrowing: (searchTerm) => {
        return axios.get(`/borrowings/search?term=${searchTerm}`);
    },
    editBorrowing:(book)=>{
        const formParams=qs.stringify(book);

        const id=book.book_id;
        return axios.patch(`/borrowings/${id}`, formParams);

    },
    addBorrowing: (borrowing) => {

        const formParams = qs.stringify(borrowing);
        return axios.post("/borrowings",formParams);
    },


}
export default BorrowingsService