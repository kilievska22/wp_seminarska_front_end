import React,{useState,useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import axios from '../../custom-axios/axios'

const AuthorEdit=(props)=>{
    const [author,setAuthor] = useState({});
    const [disabledButton, setDisabledButton]=useState(false);

    const {authorId} = useParams();
    const [genresAdd,setGenres] = useState([]);

    const history = useHistory();
    console.log("hello"+authorId);

    useEffect(() => {
        axios.get("/authors/"+authorId).then((data)=>{
            setAuthor(data.data);
        });
        axios.get("/genres").then((data)=>{
            setGenres(data.data.content);
        });
    },[])

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log("authorid"+authorId);


        props.onSubmit(


            {

                "authorId":authorId,

                "name": e.target.name.value,
"date_of_birth":e.target.date_of_birth.value,
                "biography": e.target.biography.value,
                "genre": e.target.genre.value,


            }
        );

        history.push("/authors");

    }
    const handleAuthorOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        //setBook({paramName:paramValue});
    }

    const  options =genresAdd.map((genre, index) => {
        return (
            <option value={genre.genre_id}>{genre.title}</option>
        );
    });



    return(
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Author</h4>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Author name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="name" placeholder="Author name"
                               name={"name"} onChange={handleAuthorOnChange} defaultValue={author.name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="biography" className="col-sm-4 offset-sm-1 text-left">Biography</label>
                    <div className="col-sm-6">
                        <textarea type="text" className="form-control" id="plot" placeholder="Biography" name={"biography"}
                                  onChange={handleAuthorOnChange} defaultValue={author.biography} rows="100"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="date_of_birth" className="col-sm-4 offset-sm-1 text-left">Date of birth</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="date_of_birth" placeholder="Date of birth" name={"date_of_birth"}
                               onChange={handleAuthorOnChange} defaultValue={author.date_of_birth}/>
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
export default AuthorEdit;