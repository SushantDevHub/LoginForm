

import React from "react";


export default function AuthForm() {
    const [isLogin, setIsLogin] = React.useState(true);
    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>
                        Login
                    </button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>
                        Sign Up
                    </button>
                </div>

                {isLogin ? <>
                    <div className='form'>
                        <h3>Login Form</h3>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot Password?</a>
                        <button>Login</button>
                        <p>Not a user? <a href="#" onClick={() => setIsLogin(false)}>Sign Up</a></p>
                    </div>
                </> : <>
                    <div className='form'>
                        <h3>SignUp Form</h3>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password"></input>
                        <button>Sign Up</button>
                        <p>Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a></p>
                    </div>
                </>}
            </div>
        </div>
    )
}