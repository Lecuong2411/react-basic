import React from "react";

class AddComponent extends React.Component{

  state={
    title :'',
    salary :''
  }
  handleSubmit =(event)=>{
    event.preventDefault()
    if(!this.state.title || !this.state.salary){
        alert('Missing required params')
        return;
    }
    console.log('>>>> check data Input :',this.state)
    this.props.addNewJob({
        id:Math.floor( Math.random()*1001),
        title :this.state.title,
        salary: this.state.salary
    })
    this.setState({
        title : '',
        salary:''
    })

}
    handleChangeTitleJob= (event)=>{
        this.setState({
            title:event.target.value
        })
    }
    
    handleChangeSalary= (event)=>{
        this.setState({
            salary:event.target.value
        })
    }
    render(){
        return (
            <form >
            <label htmlFor="fname">Job's title:</label><br />
            <input
             type="text" 
             value={this.state.title}
             onChange={(event)=>this.handleChangeTitleJob(event)} />
            <br />
            <label htmlFor="lname">Salary :</label><br />
            <input
             type="text"
             value={this.state.salary} 
              onChange={(event)=>this.handleChangeSalary(event)}
              /><br />
            <br />
            <input  type="button" value="Submit" onClick={(event)=>this.handleSubmit(event)} />
        </form>
        )
    }
}

export default AddComponent;