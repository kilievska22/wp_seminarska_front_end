import React,{useState,useEffect} from 'react'
import axios from '../../custom-axios/axios1'

import {Redirect, useHistory, useParams} from 'react-router-dom';
import MemberRow from "../Member/memberRow";
import EmployeesService from "../../repository/employeesAxiosRepository";
import MembersService from "../../repository/membersAxiosRepository";
import EditionsService from "../../repository/editionsAxiosRepository";


const createPenalty = (props) => {

    const history = useHistory();
    const [disabledButton, setDisabledButton]=useState(true);



    const {borrowingId} = useParams();

    const handleBookOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;

    };

    const onFormSubmit = (e) => {

        e.preventDefault();


        const newPenalty = {
            "givenAt":e.target.givenAt.value,
            "dueDate":e.target.dueDate.value,
            "price":e.target.price.value,
            "Id":borrowingId,





        };

        props.onNewTermAdded(newPenalty);


        history.push("/penalties");

    };

    return(
        <div className="row">
            <form className="card"  onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add new penalty for borrowing {borrowingId} </h4>

                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Given at</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="plot" placeholder="given at" name={"givenAt"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Due date</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="plot" placeholder="due date" name={"dueDate"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Price </label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="plot" placeholder="price" name={"price"}/>
                    </div>
                </div>







                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-upper" >
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-warning text-upper">
                            Reset
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-danger text-upper">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )



}
export default createPenalty;