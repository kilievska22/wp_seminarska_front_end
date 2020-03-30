import React,{useState,useEffect} from 'react'

import {Redirect, useHistory} from 'react-router-dom';
const createMember = (props) => {

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
            "ESSN": e.target.ESSN.value,

            "name":e.target.name.value,
            "membership_start":e.target.membership_start.value,
            "membership_expiration":e.target.membership_expiration.value,

            "email":e.target.email.value,
            "phone":e.target.phone.value,





        };
        props.onNewTermAdded(newMember);
        history.push("/members");

    }
    return(
        <div className="row">
            <form className="card"  onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Member</h4>
                <div className="form-group row">
                    <label htmlFor="ESSN" className="col-sm-4 offset-sm-1 text-left">ESSN</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="essn" placeholder="Member name"
                               name={"ESSN"} onChange={handleMemberOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Member name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="name" placeholder="Member name"
                               name={"name"} onChange={handleMemberOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="working_time" className="col-sm-4 offset-sm-1 text-left">Membership start</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="working_time" placeholder="membership start" name={"membership_start"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="salary" className="col-sm-4 offset-sm-1 text-left">Membershop expiration</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="salary" placeholder="Membership expiration "name={"membership_expiration"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="position" className="col-sm-4 offset-sm-1 text-left">Email</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="position" placeholder="Email "name={"email"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-4 offset-sm-1 text-left">Phone</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="phone" placeholder="Phone "name={"phone"}/>
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
export default createMember;