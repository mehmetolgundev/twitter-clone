import React from "react";
import "../../styles/login.css";

export default function Login(){
    return(
        <>
        <div className="container-fluid bg-black min-vh-100">
            <div className="row">
                <div className="col-md-6">
                    <h1>Login</h1>
                </div>
                <div className="col-md-6 justify-content-center align-items-center">
             <h1 className="text-white fw-bold title-font" >Happening now</h1>
                <h2 className="text-white display-6">Join today.</h2>
             <button className="btn btn-primary">Create account</button>
             <button className="btn btn-secondary">Sign in</button>
                      </div>
            </div>
        </div>
        </>

    );
}