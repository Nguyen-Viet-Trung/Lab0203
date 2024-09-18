import React, { Component } from 'react';

class MixControlledComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName: '',
            age: '',
            course: 'html'
        }
    }
    handleChange = (event1) => {
        let name = event1.target.name;
        let value = event1.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event2) =>{
        alert("Thông tin SV khi submit: Tên: "+this.state.studentName+" Tuổi: "+this.state.age+" Khóa học: "+this.state.course);
        event2.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-success'>
                <form onSubmit={this.handleSubmit}>
                    <div className='mb-3'>
                    <label className='form-label' htmlFor='studentName'>Tên sinh viên: <input type='text' id='studentName' name='studentName' value={this.state.studentName} onChange={this.handleChange}></input></label><br></br>
                    </div>
                    <div className='mh-3'>
                    <label className='form-label' htmlFor='age'>Tuổi: <input type='text' id='age' name='age' value={this.state.age} onChange={this.handleChange}></input></label><br></br>
                    </div>
                    <label className='form-label' htmlFor='course'>
                    Chọn khóa học:
                    <select name='course' id='course' value={this.state.course} onChange={this.handleChange}>
                        <option value='html'>HTML</option>
                        <option value='css'>CSS</option>
                        <option value='js'>JS</option>
                        <option value='c'>C++</option>
                    </select>
                    </label>
                    <button type='submit'value='submit'>Submit</button>
                    <p></p>                    
                </form>
            </div>
        );
    }
}

export default MixControlledComponent;