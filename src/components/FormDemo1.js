import React, { Component } from 'react';

class FormDemo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName: "Devmaster"
        }
    }
    handleChange = (event) =>{
        let name = event.target.name
        let val = event.target.value
        this.setState({
            [name]:val
        })
    }
    handleSubmit = (event1) =>{
        event1.preventDefault();
        alert("Chặn HTML chuyển trang")
    }
    render() {
        return (
            <div className='alert alert-secondary'>
                <h1>Controlled Component- Form Demo 1</h1>
                <form>
                    <div className='form-group'>
                        <label htmlFor='studentName'>Student Name: </label>
                        <input type='text' id='studentName' className='form-control' value={this.state.studentName}
                        name={'studentName'} onChange={this.handleChange}></input>
                    </div>
                    <button type='submit' className='btn btn-primary my-3'>Submit</button>
                    <p>Xin chào {this.state.studentName}</p>
                </form>
            </div>
        );
    }
}

export default FormDemo1;