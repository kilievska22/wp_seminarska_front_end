import React from 'react';

const EmployeesSearch = (props) => {

    const onSearch = (e)=>{
        e.preventDefault();
        props.onSearch(e.target["searchTerm"].value);
    }


    return (
        <form onSubmit={onSearch} className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" name={"searchTerm"} type="text" placeholder="Search by name or ESSN" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

export default EmployeesSearch;