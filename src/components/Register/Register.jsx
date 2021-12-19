import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const registerHandler = () => {
        console.log(`${firstName} ${lastName}`);
        console.log(password);
        console.log(email);
    }

    return (
        <div className="register">
            <div className="register_form">
                <h2>Create a new account</h2>
                <div className="fullname">
                    <input type="text" placeholder="First name" name="fname" onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last name" name="lname" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <input type="email" placeholder="Email Address" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="button" value="Registration" name="register" onClick={registerHandler} />
                <div className="line"></div>
                <input type="button" value="Continue with Google" name="google" />
                <p>Already registered? <Link to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;