import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";


class MyComponent extends React.Component {
    state = {
       
        arrJobs:[
            {id:'abc1', title:'Developers',salary:500 },
            {id:'abc2', title:'Tester',salary:300 },
            {id:'abc3', title:'PM',salary:800 }
        ]
    }




    render() {

        return (
            <React.Fragment>
                <AddComponent/>
                
                <ChildComponent
                
                 arrJobs={this.state.arrJobs}
                 />
                
            </React.Fragment>
        )
    }
}

export default MyComponent;