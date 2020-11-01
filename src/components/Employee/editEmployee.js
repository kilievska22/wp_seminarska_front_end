import React,{useState,useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import axios from '../../custom-axios/axios1'

const EmployeeEdit=(props)=>{
    const [employee,setEmployee] = useState({});
    const [disabledButton, setDisabledButton]=useState(false);

    const {employeeId} = useParams();
    const history = useHistory();
    console.log("hello"+employeeId);

    useEffect(() => {
        axios.get("/employees/"+employeeId).then((data)=>{
            setEmployee(data.data);
        })
    },[])

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log("authorid"+employeeId);


        props.onSubmit(


            {


                "name":e.target.name.value,
                "working_time":e.target.working_time.value,
                "salary":e.target.salary.value,
                "position":e.target.position.value,
                "phone":e.target.phone.value,
                "email":e.target.email.value,
                "ESSN": employeeId


            }
        );

        history.push("/employees");

    }
    const handleEmployeeOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        //setBook({paramName:paramValue});
    }




    return(
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Employee</h4>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Employee name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="name" placeholder="Employee name"
                               name={"name"} onChange={handleEmployeeOnChange} defaultValue={employee.name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="working_time" className="col-sm-4 offset-sm-1 text-left">Working time</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="working_time" placeholder="working time" name={"working_time"}
                               onChange={handleEmployeeOnChange} defaultValue={employee.working_time}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="salary" className="col-sm-4 offset-sm-1 text-left">Salary</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="salary" placeholder="Salary" name={"salary"}
                               onChange={handleEmployeeOnChange} defaultValue={employee.salary}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="position" className="col-sm-4 offset-sm-1 text-left">Position</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="position" placeholder="Position" name={"position"}
                               onChange={handleEmployeeOnChange} defaultValue={employee.position}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-4 offset-sm-1 text-left">Phone</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="phone" placeholder="Phone" name={"phone"}
                               onChange={handleEmployeeOnChange} defaultValue={employee.phone}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-4 offset-sm-1 text-left">Email</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="email" placeholder="Email" name={"email"}
                               onChange={handleEmployeeOnChange} defaultValue={employee.email}/>
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
    );





}
export default EmployeeEdit;