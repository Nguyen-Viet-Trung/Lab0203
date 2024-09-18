import React from "react";
export default function JSX_expression() {
    const name = "Devmaster Academy"
    const person = {
       name: "Trung",
        age: 21,

    };
    function FormatName(user){
        return user.name + ' '+ user.age;
    }
    function Welcome(user){
        if(user.name){
            return <p>Welcome to this app {user.name}, your age is {user.age}</p>
        }
        else {
            return <h1>Welcome newcomer!</h1>
        }
    }
    const info = (user) =>{
        return(
            <div>
                <p>Name :{user.name}</p>
                <p>Age: {user.age}</p>
            </div>
        )
    }
    const element = (
    <div className="alert alert-success">
        <h2>Xin chào, {person.name}</h2>
        <h2>Tuổi : {person.age}</h2>
    </div>)
    const next = '<script>XSS</scripst>'
    const elementInjection = <p className="raw">{next}</p>
    return(
        <div>
            <h>JSX_expression</h>
            <br/>
            <h3 style={{color:"blue"}}>Welcome to, {name}</h3>
            {info(person)}
            {element}
            {FormatName(person)}
            {Welcome(person)}
            {elementInjection}
        </div>
         
    )
}

