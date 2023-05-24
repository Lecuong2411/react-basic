import React from "react";
import './Nav.scss'
import {
  NavLink
} from "react-router-dom";

class Nav extends React.Component{
render() {
    return(
        <div className="topnav">
         <NavLink  to="/" >Home</NavLink>
         <NavLink to="/Todo" >Todo</NavLink>
         <NavLink to="/My" >MyComponent</NavLink>
         <NavLink to="/User" >User</NavLink>
      </div>
    )
}
}

export default Nav;