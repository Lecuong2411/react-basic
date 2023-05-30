import React from "react";
import Color from "../HOC/Color";
import imgae from '../../assets/images/fate.jpg';
import { connect } from "react-redux";


class Home extends React.Component{


    render(){
      console.log('>>>>> check props dataRedux',this.props.dataRudux)
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

const mapStateToProps= (state)=>{
 return {
  dataRudux: state.users
 }
}

export default connect(mapStateToProps)(Color(Home))