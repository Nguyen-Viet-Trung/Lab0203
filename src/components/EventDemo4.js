import React from 'react';
function EventDemo4({onSubmit}){
    const eventHandleClick1 = (param) =>{
        onSubmit("Event Demo 4","Completed")
    }
    return (
        <div className='alert alert-success'>
            <h2>EventDemo4</h2>
            <button onClick={eventHandleClick1}>Button</button>
        </div>
    );
};

export default EventDemo4;