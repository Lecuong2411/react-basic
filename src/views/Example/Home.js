import React from "react";
import Color from "../HOC/Color";


class Home extends React.Component{
  componentDidMount(){
    setTimeout(()=>{
          console.log('>>> prop', this.props);
    },3000)
  }


    render(){
        return(
            <div>Wellcome from Trái đất</div>
        )
    }
}

export default Color(Home)