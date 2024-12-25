import React from "react";
import "../../styles/login.css";
import xlogo from "../../images/x-logo.png";
export default function Login() {
  return (
    <>
      <div className="container-fluid bg-black min-vh-100 d-flex flex-column">
        <div className="row flex-grow-1 align-items-center justify-content-center">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={xlogo} alt="X" className="w-50" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-left flex-column">
            <h1 className="text-white fw-bold title-font display-2 pb-5">
              Happening now
            </h1>
            <h2 className="text-white display-6 pb-3 fw-bold">Join today.</h2>

            <button className="btn rounded-pill p-2 btn-signup">Create account</button>
          
            <div className="d-flex flex-row justify-content-left align-items-center">
            <hr style={{ color: "#E1E8ED",width: "20%" }}></hr><span className="text-white px-2 py-2">or</span><hr style={{ color: "#E1E8ED",width: "20%" }}></hr>
            </div>
            <div className="d-flex flex-column justify-content-left align-items-left">
            <span className="text-white fw-bold px-2 py-2 pb-3">Already have an account?</span>
            <button className="btn btn-black rounded-pill border border-whit fw-bold p-2 btn-signin" style={{ width: "40%",color:"#1DA1F2" }}>Sign in</button>
            </div>
          </div>
        </div>
        <div className="row align-items-bottom justify-content-bottom">
          <div className="col d-flex flex-row justify-content-around px-5">
            <p className="footer">About</p>
            <p className="footer">Download the X app</p>
            <p className="footer">Help Center</p>
            <p className="footer">Terms of Service</p>
            <p className="footer">Privacy Policy</p>
            <p className="footer">Cookie Policy</p>
            <p className="footer">Imprint</p>
            <p className="footer">Accessibility</p>
            <p className="footer">Ads info</p>
            <p className="footer">Blog</p>
            <p className="footer">Careers</p>
            <p className="footer">Brand Resources</p>
            <p className="footer">Advertising</p>
            <p className="footer">Marketing</p>
            <p className="footer">X for Business</p>
            <p className="footer">Developers</p>
            <p className="footer">Directory</p>
            <p className="footer">Settings</p>
            <p className="footer">© 2024 X Corp.</p>
          </div>
        </div>
      </div>
    </>
  );
}
