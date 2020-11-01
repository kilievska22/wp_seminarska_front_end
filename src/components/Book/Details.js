import React,{useState,useEffect, Component} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom';
import axios from '../../custom-axios/axios'
import axios1 from '../../custom-axios/axios1'






const details=(props)=>{
    // const [ingredient,setIngredient] = useState({});
    const [book, setBook]=useState([]);
    const [editions, setEditions]=useState([]);


    const {bookId} = useParams();
    console.log("bookId"+bookId)
    const history = useHistory();

    useEffect(()=>{
        axios.get("/books/"+bookId).then((data)=>{


            setBook(data.data);



        });
        axios1.get("/editions/"+bookId).then((data)=>{
            console.log("editions"+data.data.content);
            setEditions(data.data);

        });



      },[]);
    let authors=null;
    if(book.authors!==undefined){
      authors =book.authors.map((author, index) => {
        return (
            <span >{author.name}</span>
        );
    });}
    let editionsAdd=null;
    let currEditions=null;
    console.log(book);
    if(editions!==undefined){
         /*currEditions=props.editions.filter((edition)=>edition.book.book_id==bookId);
console.log(currEditions);
console.log(bookId);*/
         console.log(editions);
        editionsAdd =editions.map((edition, index) => {
            let checked=edition.free? "true":"false";
            return (
                <tr >
                    <td>{edition.id.id}</td>
                    <td>{edition.num_pages}</td>
                    <td>{checked} </td>
                    <td>
                        <Link to={"/borrowings/"+edition.id.id+"/add"} className="btn btn-sm btn-outline-dark text-left">
                            <span><strong>Borrow</strong></span>
                        </Link>

                    </td>
                </tr>
            );
        });}
    return(
        <div>
            <h1 >{book.title}</h1>
            <h3>{authors}</h3>
          <p>{book.plot}</p>
            <Link to={"/editions/"+book.book_id+"/add"} className="btn btn-sm btn-outline-dark text-left">
                <span><strong>Add new edition</strong></span>
            </Link>
            <h5>Editions

            </h5>

            <table className="table tr-history table-striped small">
                <thead>
                <tr>
                    <th scope="col">edition id</th>
                    <th scope="col">number of pages</th>


                    <th scope="col">free</th>
                    <th scope="col">

                        actions



                    </th>

                </tr>
                </thead>
                <tbody>
                {editionsAdd}
                </tbody>

            </table>
        </div>
    );

}

export default details;


