import React, { Component } from 'react';

//Stateless Functional Component
const NavBar = ({totalCounters}) =>{
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand m-2" href="#">
                Cart     
                    <span className="badge rounded-pill bg-success m-2">
                        {totalCounters}
                    </span>
            </a>
        </nav>        
    );
};

 
export default NavBar;