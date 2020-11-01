import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BorrowingRow extends Component{
    render() {

        let checked=this.props.active? "true":"false";

        return(
            <tr>
                <td scope="col">

                    <span>{this.props.from}</span>

                </td>
                <td scope="col">

                    <span>{this.props.to}</span>

                </td>
                <td scope="col">
                    <Link to={"/books/"+this.props.edition.book.id+"/details"}>
                        <span>{this.props.edition.book.id}</span>
                    </Link>

                </td>
                <td scope="col">

                        <span>{this.props.edition.id.id}</span>

                </td>
                <td scope="col">

                        <span>{this.props.employee.id.id}</span>


                </td>
                <td scope="col">

                    <span>{this.props.member.id.id}</span>


                </td>

                <td>{checked}  </td>
                <Link to={"/penalties/"+this.props.borrowingId+"/add"} className="btn btn-sm btn-outline-dark text-left">
                    <span><strong>Add penalty</strong></span>
                </Link>
                <button className="btn btn-sm btn-outline-danger " onClick={()=>this.props.onDelete(this.props.borrowingId)}>
                    <span className="fa fa-remove"/>
                    <span><strong>Remove</strong></span>
                </button>
                <button className="btn btn-sm btn-outline-success " onClick={()=>this.props.onReturn(this.props.borrowingId)}>
                    <span className="fa fa-remove"/>
                    <span><strong>Return borrowing</strong></span>
                </button>


            </tr>
        )
    }
}
export default BorrowingRow;