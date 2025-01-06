import React from "react";
import { BsTwitterX } from "react-icons/bs";
export default function Signup({closeAction}) {
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
              <h1 className="text-white sm:text-3xl xl:text-4xl font-bold">Create your account</h1>
            </div>
            </div>
            <div className="flex flex-col w-full h-fit justify-center items-center">
              <input type="text" placeholder="Name" className="bg-twitter-border text-white rounded p-2 w-1/2 mb-4"/>
              <input type="email" placeholder="Email" className="bg-twitter-border text-white rounded p-2 w-1/2 mb-4"/>
              <input type="text" placeholder="Username" className="bg-twitter-border text-white rounded p-2 w-1/2 mb-4"/>
              <input type="password" placeholder="Password" className="bg-twitter-border text-white rounded p-2 w-1/2 mb-4"/>
              <button className="bg-twitter-white text-black font-bold hover:bg-twitter-white-hover rounded-full p-2 w-1/2 mb-4">Create account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
