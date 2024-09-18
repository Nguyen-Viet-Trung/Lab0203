import React, { Component } from 'react';

class UncontrolledComponent extends Component {
    constructor(props){
        super(props);
        this.studentName = React.createRef();
        this.age = React.createRef();
        this.course = React.createRef()
        this.fileUpload = React.createRef()
    }
    handleSubmit= (event1) => {
        alert("Thông tin sinh viên khi submit: "+this.studentName.current.value + " "+this.age.current.value +" "+ this.course.current.value+" Selected file: "+this.fileUpload.current.files[0].name)
        event1.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h1>Uncontrolled Component</h1>
                <form onSubmit={this.handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='studentName'>Tên sinh viên: <input type='text' id='studentName' name='studentName' ref={this.studentName}></input></label><br></br>
                    </div>
                    <div className='mh-3'>
                    <label className='form-label' htmlFor='age'>Tuổi: <input type='text' id='age' name='age' ref={this.age}></input></label><br></br>
                    </div>
                    <label className='form-label' htmlFor='course'>
                    Chọn khóa học:
                    <select name='course' id='course' ref={this.course}>
                        <option value='html'>HTML</option>
                        <option value='css'>CSS</option>
                        <option value='js'>JS</option>
                        <option value='c'>C++</option>
                    </select>
                    </label>
                    <br></br>
                    <label htmlFor='uploadFile' className='form-label'>Upload CV:<input type='file' id='uploadFile' name='uploadFile' ref={this.fileUpload}></input></label>
                    <br></br>
                    <button type='submit'value='submit'>Submit</button>
                    <p>Chuyên sử dụng cho quản lý focus, text selection, media playback, trigger animation của element khác và tích hợp những thư viện DOM bên thứ 3</p>
                    </form>
            </div>
        );
    }
}

export default UncontrolledComponent;