import React, {Component} from 'react';
import {Link} from "react-router-dom";

class EmployeeRow extends Component{
    render() {

       // console.log(this.props.authorId);

        return(
            <tr>
                <td scope="col">{this.props.ESSN}</td>

                <td scope="col">{this.props.name}</td>
                <td scope="col">{this.props.working_time}</td>
                <td scope="col">{this.props.salary}</td>
                <td scope="col">{this.props.position}</td>
                <td scope="col">{this.props.phone}</td>
                <td scope="col">{this.props.email}</td>



                <td scope="col">
                    <Link to={"/employees/"+this.props.ESSN+"/edit"} className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <span><strong>Edit</strong></span>
                    </Link>
                    <button className="btn btn-sm btn-outline-secondary " onClick={()=>this.props.onDelete(this.props.ESSN)}>
                        <span className="fa fa-remove"/>
                        <span><strong>Remove</strong></span>
                    </button>
                    <Link to={"/employees/"+this.props.ESSN+"/details"} className="btn btn-sm btn-outline-dark">
                        <span><strong>Details</strong></span>
                    </Link>
                </td>


            </tr>
        )
    }
}
export default EmployeeRow;