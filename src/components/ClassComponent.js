import React, { Component } from "react"
class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "Viet Trung",
            age:21,
            email:"viettrung0302@gmail.com"
        }
    }
    ChangeName = () => {
        this.setState({
            userName:"Trung",
            age:1000
        })
    }
    render(){
        return (
            <div className="alert alert-primary">
                <h1>Demo State</h1>
                <p>Name: {this.state.userName}</p>
                <p>Age: {this.state.age}</p>
                <p>Email: {this.state.email}</p>
            </div>
        )
    }    
}
export default ClassComponent;
