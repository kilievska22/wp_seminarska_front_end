import React,{useState,useEffect} from 'react'

import {Redirect, useHistory} from 'react-router-dom';
const createGenre = (props) => {

    const history = useHistory();
    const [disabledButton, setDisabledButton]=useState(true);
    const handleGenreOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        if(paramValue===""){setDisabledButton(true); }
        //setIngredient({paramName:paramValue});
        else{setDisabledButton(false);}
    }
    const onFormSubmit = (e) => {

        e.preventDefault();


        const newGenre = {
            "title":e.target.title.value,
            "description":e.target.description.value,

            "period":e.target.period.value,

        };
        props.onNewTermAdded(newGenre);
        console.log(newGenre);
        history.push("/genres");

    }
    return(
        <div className="row">
            <form className="card"  onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Genre</h4>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-4 offset-sm-1 text-left">Genre name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="title" placeholder="Genre title"
                               name={"title"} onChange={handleGenreOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Description</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="plot" placeholder="Description" name={"description"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="period" className="col-sm-4 offset-sm-1 text-left">Period</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="period" placeholder="Period" name={"period"}/>
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
export default createGenre;