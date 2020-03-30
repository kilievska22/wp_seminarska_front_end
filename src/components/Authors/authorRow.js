import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AuthorRow extends Component{
    render() {

        console.log(this.props.authorId);

        return(
            <tr>
                <td scope="col">{this.props.name}</td>
                <td scope="col">{this.props.date_of_birth}</td>

                <td scope="col">
                    <Link to={"/authors/"+this.props.authorId+"/edit"} className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <span><strong>Edit</strong></span>
                    </Link>
                    <button className="btn btn-sm btn-outline-secondary " onClick={()=>this.props.onDelete(this.props.authorId)}>
                        <span className="fa fa-remove"/>
                        <span><strong>Remove</strong></span>
                    </button>
                    <Link to={"/authors/"+this.props.authorId+"/details"} className="btn btn-sm btn-outline-dark">
                        <span><strong>Details</strong></span>
                    </Link>
                </td>


            </tr>
        )
    }
}
export default AuthorRow;