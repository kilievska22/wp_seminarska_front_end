import React,{useState,useEffect} from 'react'

import {Redirect, useHistory} from 'react-router-dom';
const createAuthor = (props) => {

    const history = useHistory();
    const [genresAdd,setGenres] = useState([]);

    const [disabledButton, setDisabledButton]=useState(true);
    const handleAuthorOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        if(paramValue===""){setDisabledButton(true); }
        //setIngredient({paramName:paramValue});
        else{setDisabledButton(false);}
    }
    const onFormSubmit = (e) => {

        e.preventDefault();


        const newAuthor = {
            "name":e.target.name.value,

            "date_of_birth":e.target.date_of_birth.value,
            "biography":e.target.biography.value,
            "genre": e.target.genre.value,


        };
        props.onNewTermAdded(newAuthor);
        history.push("/authors");

    };
    const  options =genresAdd.map((genre, index) => {
        return (
            <option value={genre.genre_id}>{genre.title}</option>
        );
    });
    return(
        <div className="row">
            <form className="card"  onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Ingredient</h4>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Author name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="name" placeholder="Author name"
                               name={"name"} onChange={handleAuthorOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="date_of_birth" className="col-sm-4 offset-sm-1 text-left">Date of birth</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="date_of_birth" placeholder="Daate of birth" name={"date_of_birth"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="biography" className="col-sm-4 offset-sm-1 text-left">Biography</label>
                    <div className="col-sm-6">
                        <textarea type="text" className="form-control" id="biography" placeholder="Biography "name={"biography"}></textarea>
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
export default createAuthor;