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

     addNewJob= (job) => {
        console.log(job) 
         let curruntJobs = this.state.arrJobs
         curruntJobs.push(job)
         this.setState({
          arrJobs:curruntJobs
         //   arrJobs:[...this.state.arrJobs,job]
         })
     }

     deleteAJob=(job)=>{
        let currenJobs=this.state.arrJobs
        currenJobs = currenJobs.filter(item=>item.id !== job.id)
        this.setState({
            arrJobs : currenJobs
        })
     }
     componentDidUpdate(prevProps, prevState){
        console.log('>> run conponent did update:', 'prev state: ', prevState , 'current state', this.state)
    }

    componentDidMount(){
        console.log('>> run conponent did mount')
    }
    render() {

        return (
            <React.Fragment>
                <AddComponent addNewJob={this.addNewJob}/>
                
                <ChildComponent
                 deleteAJob={this.deleteAJob}
                 arrJobs={this.state.arrJobs}
                 />
                
            </React.Fragment>
        )
    }
}

export default MyComponent;