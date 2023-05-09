import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firsName: '',
        lastName: '',
        arrJobs:[
            {id:'abc1', title:'Developers',salary:'500 $'},
            {id:'abc2', title:'Tester',salary:'300 $'},
            {id:'abc3', title:'PM',salary:'800 $'}
        ]
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
                <ChildComponent
                 name={this.state.firsName}
                 age={'23'}
                 address= {'Hà Nội'}
                 arrJobs={this.state.arrJobs}
                 />
                
            </React.Fragment>
        )
    }
}

export default MyComponent;