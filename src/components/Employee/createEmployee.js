import React,{useState,useEffect} from 'react'

import {Redirect, useHistory} from 'react-router-dom';
const createEmployee = (props) => {

    const history = useHistory();
    const [disabledButton, setDisabledButton]=useState(true);
    const handleEmployeeOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        if(paramValue===""){setDisabledButton(true); }
        //setIngredient({paramName:paramValue});
        else{setDisabledButton(false);}
    }
    const onFormSubmit = (e) => {

        e.preventDefault();


        const newEmployee = {
            "name":e.target.name.value,

            "working_time":e.target.working_time.value,
            "salary":e.target.salary.value,
            "position":e.target.position.value,
            "phone":e.target.phone.value,
            "email":e.target.email.value,
            "ESSN":e.target.ESSN.value






        };
        props.onNewTermAdded(newEmployee);
        history.push("/employees");

    }
    return(
        <div className="row">
            <form className="card"  onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Employee</h4>
                <div className="form-group row">
                    <label htmlFor="ESSN" className="col-sm-4 offset-sm-1 text-left">ESSN</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="essn" placeholder="Employee name"
                               name={"ESSN"} onChange={handleEmployeeOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Employee name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="name" placeholder="Author name"
                               name={"name"} onChange={handleEmployeeOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="working_time" className="col-sm-4 offset-sm-1 text-left">Working time</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="working_time" placeholder="working time" name={"working_time"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="salary" className="col-sm-4 offset-sm-1 text-left">Salary</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="salary" placeholder="Salary "name={"salary"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="position" className="col-sm-4 offset-sm-1 text-left">Position</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="position" placeholder="Position "name={"position"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-4 offset-sm-1 text-left">Phone</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="phone" placeholder="Phone "name={"phone"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-4 offset-sm-1 text-left">Email</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="email" placeholder="Salary "name={"email"}/>
                    </div>
                </div>




                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-upper" disabled={disabledButton}>
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
export default createEmployee;