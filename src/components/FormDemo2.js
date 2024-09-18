import React, { Component } from 'react';

class FormDemo2 extends Component {
    constructor(props){
        super(props);
        this.state ={
            course:"css"
        };
    }
    handleChange = (event2) =>{
        this.setState({
            course: event2.target.value
        })
    }
    handleSubmit = (event2) =>{
        alert("Khóa học đã chọn: "+this.state.course);
        event2.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h1>Form Demo2</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Chọn khóa học:
                    <select value={this.state.course} onChange={this.handleChange}>
                        <option value='html'>HTML</option>
                        <option value='css'>CSS</option>
                        <option value='js'>JS</option>
                        <option value='c'>C++</option>
                    </select>
                    </label>
                    <button type='submit'value='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormDemo2;