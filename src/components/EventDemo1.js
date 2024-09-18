import React from 'react';

function EventDemo1(){
    const eventHandleClick1 = () =>{
        alert("HandleClick - Button1")
    }
    const eventHandleClick2 = () =>{
        alert("HandleClick - Button2")
    }
    const eventHandleClick3 = (param) =>{
        alert("Xin chào, "+param)
    }
    return (
        <div className='alert alert-info'>
            <h2>Event Demo sử dụng Function Component</h2>
            <button onClick={eventHandleClick1()}>Button 1</button> 
             {/*Chỉ gọi được 1 lần khi trang được render khi click*/}
            <br></br>
            <button onClick={eventHandleClick2}>Button 2</button>
            {/*Gọi được mỗi khi trang được render khi click */}

            <button onClick={()=>eventHandleClick3("Trung")}>Button 3</button>
            <button>Button 4</button>
            {/* Gọi hàm có tham số */}
        </div>
    );
};

export default EventDemo1;