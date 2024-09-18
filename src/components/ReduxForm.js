import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChangeUserName, actChangeCourseName } from '../actions';
class ReduxForm extends Component {
    handleChangeUserName = (e) =>{
        this.props.changeUsername(e.target.value);
    }
    handleChangeCourseName = (e) =>{
        this.props.changeCourseName(e.target.value)
    }
    render() {
        return (
            <div className='container'>
              <h1 className='mt-5'>Welcome to Redux Form</h1>  
            <div className='row'>
                <div className='col-12'>
                    <div className='input-group mb-3'>
                        <span className='input-group-text' id='inputGroup-sizing-default'>Change Username</span>
                        <input type='text' className='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default' onChange={this.handleChangeUserName} />
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text' id='inputGroup-sizing-default'>Change CourseName</span>
                        <input type='text' className='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-default' onChange={this.handleChangeCourseName}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h2>Xin chào, <span className='btn btn-danger'>{this.props.userName}</span></h2>
                    <h2>Chào mừng bạn đến với khóa học, <span className='btn btn-success'>{this.props.courseName}</span> tại Devmaster Academy</h2>
                </div>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{ // hàm nhận vào state của Redux Store
    return{
        userName: state.userName,
        courseName: state.courseName
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeUsername:(value) =>{
            dispatch(actChangeUserName(value));
        },
        changeCourseName:(value) =>{
            dispatch(actChangeCourseName(value));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);