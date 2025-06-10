import React from "react";
import { useState } from "react";

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function onChange(e) {
        let value = e.target.value;
        value.toUpperCase();
        console.log(value);
        setName(value);
        
    };

    function onEmail(e) {
        let value = e.target.value;
        setEmail(value);
        console.log(value)

    }

    return (
        <>
        <h1>Login</h1>
        <h2>Name</h2>
        <input type="text" placeholder="Name" onChange={onChange}></input>

        <h2>Email</h2>
        <input type="email" placeholder="Email" onInput={onEmail}></input>
<br></br>
        <button type="submit">Submit</button>
        <h3>hello {name} </h3>


        </>
    )

}

export default Login;