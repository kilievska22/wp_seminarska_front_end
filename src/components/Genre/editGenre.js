import React,{useState,useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import axios from '../../custom-axios/axios'

const GenreEdit=(props)=>{
    const [genre,setGenre] = useState({});
    const [disabledButton, setDisabledButton]=useState(false);

    const {genreId} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("/genres/"+genreId).then((data)=>{
            setGenre(data.data);
        })
    },[])

    const onFormSubmit = (e) => {
        e.preventDefault();


        props.onSubmit(


            {


                "title": e.target.title.value,

                "description": e.target.description.value,
                "period": e.target.period.value,


                "genre_id":genreId

            }
        );

        history.push("/genres");

    }
    const handleGenreOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        //setBook({paramName:paramValue});
    }




    return(
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Genre</h4>
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Genre title</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="title" placeholder="Genre title"
                               name={"title"} onChange={handleGenreOnChange} defaultValue={genre.title}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Description</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="plot" placeholder="Plot" name={"description"}
                               onChange={handleGenreOnChange} defaultValue={genre.description}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="period" className="col-sm-4 offset-sm-1 text-left">Period</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="period" placeholder="Plot" name={"period"}
                               onChange={handleGenreOnChange} defaultValue={genre.period}/>
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
export default GenreEdit;