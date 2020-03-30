import React,{useState,useEffect} from 'react'
import axios from '../../custom-axios/axios'

import {Redirect, useHistory} from 'react-router-dom';
import MemberRow from "../Member/memberRow";
const createBook = (props) => {

    const history = useHistory();
    const [disabledButton, setDisabledButton]=useState(true);
    const [genresAdd,setGenres] = useState([]);
    const [authorsAdd,setAuthors] = useState([]);


    const handleBookOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        if(paramValue===""){setDisabledButton(true); }
        //setIngredient({paramName:paramValue});
        else{setDisabledButton(false);}
    };
    useEffect(() => {
        axios.get("/genres").then((data)=>{
            setGenres(data.data.content);
        });
        axios.get("/authors").then((data)=>{
            setAuthors(data.data.content);
        });

    },[])
    const onFormSubmit = (e) => {

        e.preventDefault();


        const newBook = {
            "title":e.target.title.value,

            "plot":e.target.plot.value,
            "genre": e.target.genre.value,
            "authors": e.target.authors.value,

        };
        props.onNewTermAdded(newBook);
        history.push("/books");

    }
    const  options =genresAdd.map((genre, index) => {
        return (
            <option value={genre.genre_id}>{genre.title}</option>
        );
    });
    const  optionsAuthors =authorsAdd.map((author, index) => {
        return (
            <option value={author.authorId}>{author.name}</option>
        );
    });
    return(
        <div className="row">
            <form className="card"  onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Book</h4>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-4 offset-sm-1 text-left">Book title</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="title" placeholder="Book title"
                               name={"title"} onChange={handleBookOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Plot</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="plot" placeholder="Plot" name={"plot"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Genre</label>
                    <div className="col-sm-6">
                        <select name={"genre"} className="form-control">
                            {options}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Authors</label>
                    <div className="col-sm-6">
                        <select name={"authors"} className="form-control" multiple={true}>
                            {optionsAuthors}
                        </select>
                    </div>
                </div>




                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-upper" disabled={disabledButton}>
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
export default createBook;