import React,{useState,useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import axios from '../../custom-axios/axios'

const BookEdit=(props)=>{
    const [book,setBook] = useState({});
    const [disabledButton, setDisabledButton]=useState(false);
    const [genresAdd,setGenres] = useState([]);
    const [authorsAdd,setAuthors] = useState([]);
    const {bookId} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("/books/"+bookId).then((data)=>{
            setBook(data.data);
        });
        axios.get("/genres").then((data)=>{
            setGenres(data.data.content);
        });
        axios.get("/authors").then((data)=>{
            setAuthors(data.data.content);
        });
    },[])

    const onFormSubmit = (e) => {
        e.preventDefault();
console.log("bookid"+bookId);


        props.onSubmit(


            {


                "title": e.target.title.value,

                "plot": e.target.plot.value,
                "genre": e.target.genre.value,
                "authors": e.target.authors.value,
                "book_id":bookId


            }
        );

        history.push("/books");

    }
    const handleBookOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        //setBook({paramName:paramValue});
    }


    const  options =genresAdd.map((genre, index) => {
        return (
            <option value={genre.id.id}>{genre.title}</option>
        );
    });
    const  optionsAuthors =authorsAdd.map((author, index) => {
        return (
            <option value={author.id.id}>{author.name}</option>
        );
    });

    return(
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Book</h4>
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Book title</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="title" placeholder="Book title"
                               name={"title"} onChange={handleBookOnChange} defaultValue={book.title}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Plot</label>
                    <div className="col-sm-6">
                        <textarea type="text" className="form-control w-auto" id="plot" placeholder="Plot" name={"plot"}
                                  onChange={handleBookOnChange} defaultValue={book.plot} rows="300"  >
                        </textarea>
                    </div>

                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Genre</label>
                    <div className="col-sm-6">
                        <select name={"genre"}  className="form-control">
                            {options}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Authors</label>
                    <div className="col-sm-6">
                        <select name={"authors"} className="form-control" multiple={false}>
                            {optionsAuthors}
                        </select>
                    </div>
                </div>




                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-upper" >
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-warning text-upper">
                            Reset
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-danger text-upper">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );





}
export default BookEdit;