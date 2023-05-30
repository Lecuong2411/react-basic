import React from "react";
import Color from "../HOC/Color";
import imgae from '../../assets/images/fate.jpg';

class Home extends React.Component{
  componentDidMount(){
    setTimeout(()=>{
          console.log('>>> prop', this.props);
    },3000)
  }


    render(){
        return(
          <>
            <div>Wellcome from Trái đất</div>
            <div>
              <img width="470px" src={imgae} alt="" />
            </div>
          </>
          
            
        )
    }
}

export default Color(Home)