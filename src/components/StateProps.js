import React, { Component } from 'react';

class StateProps extends Component {
    constructor(props){
        super(props);
        this.state ={
            userName: "Viet Trung",
            email:"viettrung0302@gmail.com"
        }
    }
    eventHandleClick = ()=>{
        this.props.onReceive(this.state.userName);
    }
    render() {
        let {renderCompany} = this.props;
        return (
            <div className='alert alert-info'>
                <h2>Event sử dụng state, props</h2>
                <br></br>
                <p>Xin chào, {this.state.userName}</p>
                <button onClick={this.eventHandleClick}>Chuyển dữ liệu 'userName' lên app thông qua props</button>
                <br></br>
                <h2>{this.props.renderCompany} + {renderCompany}</h2>
                <h3>{this.state.email}</h3>
            </div>
        );
    }
}

export default StateProps;