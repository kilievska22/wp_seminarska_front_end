import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PenaltyRow extends Component{
    render() {

        //let checked=this.props.active? "true":"false";

        return(
            <tr>
                <td scope="col">

                    <span>{this.props.givenAt}</span>

                </td>
                <td scope="col">

                    <span>{this.props.dueDate}</span>

                </td>
                <td scope="col">

                    <span>{this.props.price}</span>

                </td>


                <td scope="col">

                    <span>{this.props.borrowing.borrowingId}</span>

                </td>

                <td scope="col">

                    <span>{this.props.paid? "true":"false"}</span>

                </td>

                <button className="btn btn-sm btn-outline-secondary " onClick={()=>this.props.onDelete(this.props.penaltyId)}>
                    <span className="fa fa-remove"/>
                    <span><strong>Remove</strong></span>
                </button>
                <button className="btn btn-sm btn-outline-secondary " onClick={()=>this.props.onPayPenalty(this.props.penaltyId)}>
                    <span className="fa fa-remove"/>
                    <span><strong>Pay</strong></span>
                </button>


            </tr>
        )
    }
}
export default PenaltyRow;