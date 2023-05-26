import React from "react";
import axios from "axios";
import './ListUser.scss'

class ListUser extends React.Component {

    state = {
        ListUser: []
    }
    async componentDidMount() {

        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []
        })
    }
    render() {
        let listUsers = this.state.ListUser;
        console.log(listUsers)
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div className="list-user-content">
                                <div className="child" key={item.id}>
                                    {index+1} - {item.first_name} - {item.last_name}
                                </div>
                            
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}



export default ListUser;