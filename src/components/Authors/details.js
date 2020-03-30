import React,{useState,useEffect, Component} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import axios from '../../custom-axios/axios'





const details=(props)=>{
    // const [ingredient,setIngredient] = useState({});
    const [author, setAuthor]=useState([]);

    const {authorId} = useParams();
    const history = useHistory();

    useEffect(()=>{
        axios.get("/authors/"+authorId).then((data)=>{


            setAuthor(data.data);


        });




    },[]);

    return(
        <div>
            <h1>{author.name}</h1>
            <h3>{author.date_of_birth}</h3>
            <p>{author.biography}</p>
        </div>
    );

}

export default details;


