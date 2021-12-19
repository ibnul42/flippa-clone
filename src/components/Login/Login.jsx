import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div className="login">
           <div className="login_form">
               <h2>Welcome</h2>
               <input type="email" placeholder="Email Address" name="email" onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
               <Link to="/">Forget Password?</Link>
               <input type="button" value="Sign in" onClick={loginHandler} />
               <div className="line"></div>
                <input type="button" value="Continue with Google" name="google" />
               <p>Don't have one? <Link to="/register">Registration</Link></p>

           </div>
        </div>
    );
};

export default Login;