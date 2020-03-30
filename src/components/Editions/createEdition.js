import React,{useState,useEffect} from 'react'
import axios from '../../custom-axios/axios'
import EditionsService from '../../repository/editionsAxiosRepository';

import {Redirect, useHistory, useParams} from 'react-router-dom';
import MemberRow from "../Member/memberRow";
import GenresService from "../../repository/genresAxiosRepository";
const createEdition = (props) => {

    const history = useHistory();
    const [disabledButton, setDisabledButton]=useState(true);
    const [book,setBook] = useState([]);


    const {bookId} = useParams();

    const handleBookOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;

    };
    useEffect(() => {
        axios.get("/books/"+bookId).then((data)=>{
            setBook(data.data);
        });


    },[])
    const onFormSubmit = (e) => {

        e.preventDefault();

console.log("hello");
        const newEdition = {
            "Id":e.target.Id.value,
            "num_pages":e.target.num_pages.value,



        };
        props.onNewTermAdded(newEdition);

        history.push("/books/"+bookId);

    }

    return(
        <div className="row">
            <form className="card"  onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add new edition for book {book.title} </h4>
                <div className="form-group row">

                        <input type="hidden"
                               name={"Id"} defaultValue={bookId} />

                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Number of pages</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="plot" placeholder="Number of pages" name={"num_pages"}/>
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

    )



}
export default createEdition;