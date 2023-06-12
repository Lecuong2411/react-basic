import React from "react";
import Color from "../HOC/Color";
import imgae from '../../assets/images/fate.jpg';
import { connect } from "react-redux";


class Home extends React.Component {


  hendleDeleteUser = (user) => {
    console.log(user)
    this.props.deleteUserRedux(user)
  }
  handlCreateUser =()=>{
 this.props.addUserRedux()
  }
  render() {

    console.log('>>>>> check props dataRedux', this.props.dataRudux)
    let listUdsers = this.props.dataRudux;
    return (
      <>

        <div>Wellcome from Trái đất</div>
        <div>
          <img width="470px" src={imgae} alt="" />
        </div>
        <div>
          {listUdsers && listUdsers.length > 0 &&
            listUdsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1}- {item.name}
                  &nbsp;  <span onClick={() => this.hendleDeleteUser(item)}>x</span>
                </div>
              )
            })
          }
          <button onClick={()=>this.handlCreateUser()}>Add User</button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataRudux: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
    addUserRedux : () => dispatch({type : 'CREATE_USER'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))