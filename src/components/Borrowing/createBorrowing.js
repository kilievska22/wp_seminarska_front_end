import React,{useState,useEffect} from 'react'
import axios from '../../custom-axios/axios1'

import {Redirect, useHistory, useParams} from 'react-router-dom';
import MemberRow from "../Member/memberRow";
import EmployeesService from "../../repository/employeesAxiosRepository";
import MembersService from "../../repository/membersAxiosRepository";
import EditionsService from "../../repository/editionsAxiosRepository";


const createBorrowing = (props) => {

    const history = useHistory();
    const [disabledButton, setDisabledButton]=useState(true);
    const [employees,setEmployees] = useState([]);
    const [members,setMembers] = useState([]);



    const {editionId} = useParams();
console.log("E"+editionId);
    const handleBookOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;

    };
    useEffect(() => {
        axios.get("/members").then((data)=>{
            setMembers(data.data.content);
        });
        axios.get("/employees").then((data)=>{
            setEmployees(data.data.content);
        });


    },[])
    const onFormSubmit = (e) => {

        e.preventDefault();


        const newBorrowing = {
            "from":e.target.from.value,
            "to":e.target.to.value,
             "memberId":e.target.memberId.value,
            "editionId":editionId,

            "employeeId":e.target.employeeId.value,



        };
        console.log(newBorrowing);
        props.onNewTermAdded(newBorrowing);
        props.reloadEditions();

        history.push("/borrowings");

    }
    const  optionsEmployees =employees.map((employee, index) => {
        return (
            <option value={employee.id.id}>{employee.name}</option>
        );
    });
    const  optionsMembers =members.map((member, index) => {
        return (
            <option value={member.id.id}>{member.name}</option>
        );
    });
    return(
        <div className="row">
            <form className="card"  onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add new borrowing for edition {editionId} </h4>

                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">From</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="plot" placeholder="From" name={"from"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">To</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="plot" placeholder="To" name={"to"}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Employee</label>
                    <div className="col-sm-6">
                        <select name={"employeeId"} className="form-control">
                            {optionsEmployees}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plot" className="col-sm-4 offset-sm-1 text-left">Member</label>
                    <div className="col-sm-6">
                        <select name={"memberId"} className="form-control">
                            {optionsMembers}
                        </select>
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
export default createBorrowing;