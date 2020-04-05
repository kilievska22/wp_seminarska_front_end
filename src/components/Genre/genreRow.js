import React, {Component} from 'react';
import {Link} from "react-router-dom";

class GenreRow extends Component{
    render() {

        return(
            <tr>
                <td scope="col">{this.props.title}</td>
                <td scope="col">{this.props.period}</td>
                <td scope="col">
                    <Link to={"/genres/"+this.props.genre_id+"/edit"} className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <span><strong>Edit</strong></span>
                    </Link>
                    <button className="btn btn-sm btn-outline-danger " onClick={()=>this.props.onDelete(this.props.genre_id)}>
                        <span className="fa fa-remove"/>
                        <span><strong>Remove</strong></span>
                    </button>
                    <Link to={"/genres/"+this.props.genre_id+"/details"} className="btn btn-sm btn-outline-dark">
                        <span><strong>Details</strong></span>
                    </Link>
                </td>


            </tr>
        )
    }
}
export default GenreRow;