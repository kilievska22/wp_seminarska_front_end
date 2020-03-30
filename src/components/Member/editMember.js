import React,{useState,useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import axios from '../../custom-axios/axios'

const MemberEdit=(props)=>{
    const [member,setMember] = useState({});
    const [disabledButton, setDisabledButton]=useState(false);

    const {memberId} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("/members/"+memberId).then((data)=>{
            setMember(data.data);
        })
    },[])

    const onFormSubmit = (e) => {
        e.preventDefault();


        props.onSubmit(


            {


                "name":e.target.name.value,
                "membership_start":e.target.membership_start.value,
                "membership_expiration":e.target.membership_expiration.value,

                "email":e.target.email.value,
                "phone":e.target.phone.value,
                "ESSN": memberId,



            }
        );

        history.push("/members");

    }
    const handleMemberOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        //setBook({paramName:paramValue});
    }




    return(
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Member</h4>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Member name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="name" placeholder="Member name"
                               name={"name"} onChange={handleMemberOnChange} defaultValue={member.name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="working_time" className="col-sm-4 offset-sm-1 text-left">Membership start</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="working_time" placeholder="membership_start" name={"membership_start"}
                               onChange={handleMemberOnChange} defaultValue={member.membership_start}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="salary" className="col-sm-4 offset-sm-1 text-left">Membership expiration</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="salary" placeholder="membership_expiration" name={"membership_expiration"}
                               onChange={handleMemberOnChange} defaultValue={member.membership_expiration}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="position" className="col-sm-4 offset-sm-1 text-left">Email</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="position" placeholder="Email" name={"email"}
                               onChange={handleMemberOnChange} defaultValue={member.email}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-4 offset-sm-1 text-left">Phone</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="phone" placeholder="Phone" name={"phone"}
                               onChange={handleMemberOnChange} defaultValue={member.phone}/>
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
export default MemberEdit;