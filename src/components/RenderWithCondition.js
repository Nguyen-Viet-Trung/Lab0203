import React, { Component } from 'react';
var LoginControl = (props) =>{
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <LoginComp></LoginComp>;
    }
    return <LogoutComp></LogoutComp>;
}
var LogoutComp = () =>{
    return(
        <div>
            <h2>Please sign in</h2>
        </div>
    )
}
var LoginComp = () =>{
    return(
        <div>
            <h2>Welcome to this app</h2>
        </div>
    )
}
class RenderWithCondition extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }
    handleLogInClick = () =>{
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogOutClick = () =>{
        this.setState({
            isLoggedIn: false
        })
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <h1>Render With Condition</h1>
                <LoginControl isLoggedIn={this.state.isLoggedIn}>

                </LoginControl>
                {/* {button} */}
                {
                    isLoggedIn ? <input type='button' value="Logout" onClick={this.handleLogOutClick}></input>:
                    <input type='button' value='Login' onClick={this.handleLogInClick}></input>
                }
            </div>
        );
    }
}

export default RenderWithCondition;