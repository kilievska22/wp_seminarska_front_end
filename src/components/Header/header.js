import React from 'react';
import {Link} from "react-router-dom";

const Header=(props)=>{
    return(
        <header style={{backgroundColor: "lavender"}}>
            <nav className="navbar navbar-expand-md navbar-light navbar-fixed" >
                <Link className="navbar-brand" to={"/index"}>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/genres"}>Genres</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/books"}>Books</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/authors"}>Authors</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/employees"}>Employees</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/members"}>Members</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/borrowings"}>Borrowings</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/penalties"}>Penalties</Link>
                        </li>
                    </ul>
                    <button className="btn btn-sm btn-outline-secondary " onClick={()=>props.getUnpaid()}>

                        <span><strong>Get penalties with due date today</strong></span>
                    </button>
                </div>
            </nav>
        </header>


    )



}
export default Header;