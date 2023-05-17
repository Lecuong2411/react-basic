import React from "react";
import './Nav.scss'

class Nav extends React.Component{
render() {
    return(
        <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="/Todo">Todo</a>
        <a href="/My">MyComponent</a>
      </div>
    )
}
}

export default Nav;