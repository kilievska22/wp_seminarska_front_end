import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BookRow extends Component{
    render() {
        console.log(this.props.book_id);
        let title=null;
        let genreId=null;
        if(this.props.genre!==null){
            title=this.props.genre.title;
            genreId=this.props.genre.genre_id;
        }
        let authors=null;

        if(this.props.authors!==null)
             authors =this.props.authors.map((author, index) => {
                return (
                    <Link to={"/authors/"+author.authorId+"/details"}>
                        <span>{author.name}&nbsp;</span></Link>
                );
            });
        return(
            <tr>
                <td scope="col">{this.props.title}</td>
                <td scope="col">
                    <Link to={"/genres/"+genreId+"/details"}>
                        <span>{title}</span>
                    </Link>
                </td>

                <td scope="col">{authors}</td>

                <td scope="col">{this.props.num_editions}</td>
                <td scope="col">
                    <Link to={"/books/"+this.props.book_id+"/edit"} className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <span><strong>Edit</strong></span>
                    </Link>
                    <button className="btn btn-sm btn-outline-secondary " onClick={()=>this.props.onDelete(this.props.book_id)}>
                        <span className="fa fa-remove"/>
                        <span><strong>Remove</strong></span>
                    </button>
                    <Link to={"/books/"+this.props.book_id+"/details"} className="btn btn-sm btn-outline-dark">
                        <span><strong>Details</strong></span>
                    </Link>
                </td>


            </tr>
        )
    }
}
export default BookRow;