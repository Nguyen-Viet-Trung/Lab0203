import React from "react";
function FunctionComponent(props){
    return(
        <div className="alert alert-success">
            <h1>This is a function components</h1>
            <h2>Hello {props.userName}! Welcome to {props.name}</h2>
        </div>
    )
}
export default FunctionComponent;