import React from "react";

class ChildComponent extends React.Component {
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
    console.log('>>>> check state :', this.state)
}
    render() {
        console.log('>>>> check props :', this.props)
        // let name= this.props.name
        // let age= this.props.age

        let {name,age}= this.props
        return (
           <>
             <div>
                Child Component {name} - {age}
             </div>
           </>
        )
    }
}

export default ChildComponent;