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
                    <Link to={"/books/"+this.props.edition.book.book_id+"/details"}>
                        <span>{this.props.edition.book.title}</span>
                    </Link>

                </td>
                <td scope="col">

                        <span>{this.props.edition.edition_id}</span>

                </td>
                <td scope="col">

                        <span>{this.props.employee.essn}</span>


                </td>
                <td scope="col">

                    <span>{this.props.member.essn}</span>


                </td>

                <td>{checked}  </td>
                <Link to={"/penalties/"+this.props.edition.edition_id+"/add"} className="btn btn-sm btn-outline-dark text-left">
                    <span><strong>Add penalty</strong></span>
                </Link>
                <button className="btn btn-sm btn-outline-secondary " onClick={()=>this.props.onDelete(this.props.borrowingId)}>
                    <span className="fa fa-remove"/>
                    <span><strong>Remove</strong></span>
                </button>
                <button className="btn btn-sm btn-outline-secondary " onClick={()=>this.props.onReturn(this.props.borrowingId)}>
                    <span className="fa fa-remove"/>
                    <span><strong>Return borrowing</strong></span>
                </button>


            </tr>
        )
    }
}
export default BorrowingRow;