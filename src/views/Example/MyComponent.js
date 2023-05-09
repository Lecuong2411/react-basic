import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firsName: '',
        lastName: ''
    }

handleChangeFirstName= (event)=>{
    this.setState({
        firsName:event.target.value
    })
}

handleChangeLastName= (event)=>{
    this.setState({
        lastName:event.target.value
    })
}

handleSubmit =(event)=>{
    event.preventDefault()
    console.log('>>>> check data Input :',this.state)
}
    render() {

        return (
            <React.Fragment>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input
                     type="text" 
                     value={this.state.firsName}
                     onChange={(event)=>this.handleChangeFirstName(event)} />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                     type="text"
                     value={this.state.lastName} 
                      onChange={(event)=>this.handleChangeLastName(event)}
                      /><br />
                    <br />
                    <input  type="button" value="Submit" onClick={(event)=>this.handleSubmit(event)} />
                </form>
                <ChildComponent name={'child one'} age={'23'}/>
                
            </React.Fragment>
        )
    }
}

export default MyComponent;