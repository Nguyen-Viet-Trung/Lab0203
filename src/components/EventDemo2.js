import React, { Component } from 'react';

class EventDemo2 extends Component {
    eventHandleClick1 = (param) =>{
        alert("Chào mừng tới Event Demo 2 "+param)
    }
    eventHandleClick2 = () =>{
        alert("Button2")
    }
    render() {
        return (
            <div>
                <h2>Event Demo 2 sử dụng Class Component</h2>
                <button onClick={()=>this.eventHandleClick1("Trung")}>Button1</button>
                <br></br>
                <button onClick={()=>this.eventHandleClick2()}>Button2</button>
            </div>
        );
    }
}

export default EventDemo2;