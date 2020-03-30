import React,{useState,useEffect, Component} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import axios from '../../custom-axios/axios'





const details=(props)=>{
    // const [ingredient,setIngredient] = useState({});
    const [genre, setGenre]=useState([]);

    const {genreId} = useParams();
    const history = useHistory();

    useEffect(()=>{
        axios.get("/genres/"+genreId).then((data)=>{


            setGenre(data.data);


        });




    },[]);

    return(
        <div>
            <h1>{genre.title}</h1>
            <h3>{genre.period}</h3>
            <p>{genre.description}</p>
        </div>
    );

}

export default details;


