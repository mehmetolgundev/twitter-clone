import React,{useState} from "react";
import { BsTwitterX } from "react-icons/bs";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
export default function Welcome() {
  const [showSignin,setShowSignin]=useState(false);
  const showSignIn=()=>setShowSignin(true);
  const closeSignIn=()=>setShowSignin(false);
  const [showSignup,setShowSignup]=useState(false);
  const showSignUp=()=>setShowSignup(true);
  const closeSignUp=()=>setShowSignup(false);
  const forwardAction=()=>{
    closeSignIn();
    showSignUp();
  }
  return (
    <>
      <div className="container-fluid flex flex-wrap flex-col h-screen">
        <div className="flex flex-wrap flex-1 h-full">
          <div className="order-1 w-full h-fit p-4 md:h-full md:w-1/2 flex justify-start items-start md:justify-center md:items-center">
            <BsTwitterX className="text-white w-1/6 h-1/6 md:w-1/2 md:h-1/2" />
          </div>
          <div className="order-2 w-full p-4 md:w-1/2 flex-1 h-full flex flex-col justify-start items-start md:justify-center md:items-start">
            <h1 className="self-start text-white text-7xl font-bold mb-24">
              Happening now
            </h1>
            <h2 className="text-white text-2xl font-bold mb-4">Join today.</h2>
            <button className="bg-twitter-blue hover:bg-twitter-blue-hover text-white font-bold px-4 py-2 rounded-full w-3/4 md:w-1/2 mb-4" onClick={showSignUp}>
              Create account
            </button>
           
            <hr className="w-3/4 md:w-1/2 text-white mb-8"></hr>
            <p className="text-white text-md font-bold mb-4">
              Already have an account?
            </p>
            <button className="bg-black text-twitter-blue hover:bg-twitter-signin-hover font-bold border border-twitter-border px-4 py-2 rounded-full w-3/4 md:w-1/2"
            onClick={showSignIn}>
              Sign in
            </button>
          
          </div>
        </div>
        <div className="w-full flex h-fit flex-wrap justify-center items-center text-sm gap-x-4 mb-4 text-twitter-border">
          <p>About</p>
          <p>Download the X app</p>
          <p>Help Center</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Imprint</p>
          <p>Accessibility</p>
          <p>Ads info</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Brand Resources</p>
          <p>Advertising</p>
          <p>Marketing</p>
          <p>X for Business</p>
          <p>Developers</p>
          <p>Directory</p>
          <p>Settings</p>
          <p>© 2025 X Corp.</p>
        </div>
      </div>
      {showSignin &&<Login closeAction={closeSignIn} forwardAction={forwardAction}/>}
      {showSignup && <Signup closeAction={closeSignUp}/>}
    </>
  );
}
