 
 
import React from "react";
 

export default function AuthForm() {
    const [isLogin, setIsLogin] = React.useState(true);
    return (
    <div className="container">
        <div className="form-container">
            <div className = "form-toggle">
                <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>
                    Login
                </button>
                <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>
                    Sign Up
                </button>
            </div>
        </div>
    </div>
    )
}