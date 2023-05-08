import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'JJ',
        channel: 'Hoi dan IT'
    }
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value,
            channel:   'abc'
        });
    }
    /*
     JSX => return block
    */
    handleClickButtun = () => {
        alert('click me')
    }

    render() {
    
        return (
            <React.Fragment>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnchangeName(event)}
                    />
                    Hello my Name is {this.state.name}!
                </div>
                <div className="second">
                    My youtobe channel : {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={()=>this.handleClickButtun() }>Click me</button>
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent;