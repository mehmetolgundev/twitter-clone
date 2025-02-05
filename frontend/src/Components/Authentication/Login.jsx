import React from "react";
import { BsTwitterX } from "react-icons/bs";
import Signup from "./Signup";
export default function Login({closeAction,forwardAction}) {

  return (
    <>
      <div className="fixed inset-0 bg-twitter-border bg-opacity-50 flex justify-center items-center">
        <div className="bg-black w-full h-full md:w-1/3 md:h-fit rounded-xl shadow-xl p-6 pb-16">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row w-full h-fit mb-10">
              <button className="w-1/3 font-bold text-2xl text-white h-fit text-left" onClick={closeAction}>x</button>
              <div className="w-1/3 flex justify-center items-start p-0 h-fit" >
              <BsTwitterX className="text-white w-full h-8" />
              </div>
            </div>
            <div className="flex flex-row w-full h-fit justify-center items-start">
            <div className="w-1/2 mb-10">
              <h1 className="text-white sm:text-3xl xl:text-4xl font-bold">Sign in to X</h1>
            </div>
            </div>
            <div className="flex flex-col w-full h-fit justify-center items-center">
              <input type="text" placeholder="Phone, email, or username" className="bg-twitter-border text-white rounded p-2 w-1/2 mb-4"/>
              <input type="password" placeholder="Password" className="bg-twitter-border text-white rounded p-2 w-1/2 mb-4"/>
              <button className="bg-twitter-white text-black font-bold hover:bg-twitter-white-hover rounded-full p-2 w-1/2 mb-4">Log in</button>
              <p className="text-white text-sm">Don't have an account? <a onClick={forwardAction} className="text-twitter-blue">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
