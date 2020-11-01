import React,{useState,useEffect} from 'react'

import {Redirect, useHistory} from 'react-router-dom';
const createLogin = (props) => {

    const history = useHistory();
    const [disabledButton, setDisabledButton]=useState(true);
    const handleMemberOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        if(paramValue===""){setDisabledButton(true); }
        //setIngredient({paramName:paramValue});
        else{setDisabledButton(false);}
    }
    const onFormSubmit = (e) => {

        e.preventDefault();


        const newMember = {
            "username": e.target.username.value,

            "password":e.target.password.value





        };
        props.onNewTermAdded(newMember);
        history.push("/members");

    }
    return(
        <div className="row">
            <form className="card"  onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Sign in/Sign up</h4>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-4 offset-sm-1 text-left">Username</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="username" placeholder="Username"
                               name={"username"} onChange={handleMemberOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-4 offset-sm-1 text-left">Password</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="password" placeholder="Password"
                               name={"password"} onChange={handleMemberOnChange}/>
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
export default createLogin;