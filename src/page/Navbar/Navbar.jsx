import React,{useState} from "react";
import './Navbar.css';
import {Link} from 'react-router-dom'



const Navbar = () => {
    let [show,setShow]=useState(true)
    let toggle=()=>{
        setShow(!show)
        console.log(show)
    }
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler border border-info text-info"
            type="button"
            onClick={toggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <div className= {(show)?"collapse navbar-collapse":"collapse navbar-collapse acvtive"} > */}
          <div className= "collapse navbar-collapse acvtive" >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link className="nav-link text-light " aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/aboutus">
                  About us
                </Link>
              </li> <li className="nav-item ">
                <Link className="nav-link text-light" to="/contact">
                  contact
                </Link>
              </li>
              
            </ul>
    
          </div>
        </div>
      </nav>


    </>
  );
};
export default Navbar;
